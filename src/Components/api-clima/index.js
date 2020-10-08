import React, { useState, useEffect } from 'react';


const Clima = () => {
    const [ clima, setClima] = useState({});

    const  fecha = new Date()
    const  diaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    const  mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const fechaActual= diaSemana[fecha.getDay()] + ' ' + fecha.getDate() + ' de ' + mes[fecha.getMonth()] + ' del ' + fecha.getFullYear();  
    

    useEffect(()=>{
       consultarApi();
    },[]);
   
  const consultarApi = async () => {
      const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/find?q=tucuman&q=argentina&units=metric&appid=054dd805e0060ac78e02d0c7f5614548`) 
      const resultado = await respuesta.json();
      console.log(resultado.list[0]);
      setClima(resultado.list[0]);
  }


    return(
        <>
    <div className='d-flex '>
       <div  className='w-100 '>
       <div className='row w-100'>
            <div className='col-md-4 col-sm-12 bg-warning w-100'>
               {fechaActual}
               <p>   {clima.name} -  {!clima.sys ? '' : clima.sys.country} - </p> 
           </div>
           <div className='col-md-4 col-sm-12 bg-success w-100'>
              <div className=''>
                <h7>Clima </h7>
                <p>   Temp: {clima.main ===  undefined ? '' : clima.main.temp}°C -</p> 
                <p>   Humedad:{ !clima.main  ? '' : clima.main.humidity} %  </p>
                {/* <p>   {!clima.weather ? '' : clima.weather[0].description} </p> */}
                <p>  Estado: {!clima.weather ? '' : clima.weather[0].main} </p>
                <div>
                   <img src={ `http://openweathermap.org/img/wn/${!clima.weather ? '' :clima.weather[0].icon}@2x.png`} /> 
                </div>
             </div>
          </div>
          <div className='col-md-4 col-sm-12 bg-danger w-100'>
               <h7>conversor monedas</h7>
          </div>
       </div>
       </div>
     </div>

            {/* <img src={http://openweathermap.org/img/wn/04d@2x.png} alt={clima.weather}>icono</img> */}
        
        </>
     )
 }

           
    

export default Clima;

//   api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=054dd805e0060ac78e02d0c7f5614548
//   http:
  //api.openweathermap.org/data/2.5/weather?q=tucuman&q=argentina&units=&appid=054dd805e0060ac78e02d0c7f5614548&units=metric

//   http:
  //api.openweathermap.org/data/2.5/find?q=tucuman&q=argentina&units=&appid=054dd805e0060ac78e02d0c7f5614548&units=metric
