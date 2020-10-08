import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faEuroSign, faCloudSunRain, faMoneyCheckAlt, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const ApiDePrueba = () => {
    const [ clima, setClima] = useState({});
    const [ conversor, setConversor] = useState({});


    const  fecha = new Date()
    const  diaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    const  mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const fechaActual= diaSemana[fecha.getDay()] + ' ' +
                       fecha.getDate() + ' de ' + 
                       mes[fecha.getMonth()] + ' del ' +
                       fecha.getFullYear();  
    

    useEffect(()=>{
       consultarClima();
       consultarMonedas();
    },[]);
   
  const consultarClima = async () => {
      const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/find?q=tucuman&q=argentina&units=metric&appid=054dd805e0060ac78e02d0c7f5614548`) 
      const resultado = await respuesta.json();
      console.log(resultado.list[0]);
      setClima(resultado.list[0]);
  }

  const consultarMonedas = async () => {  
      const respuesta = await fetch('https://free.currconv.com/api/v7/convert?q=USD_ARS,EUR_ARS&compact=ultra&apiKey=f9b32090ff7f133a5aed')
      const resultado = await respuesta.json();
      console.log(resultado);
      setConversor(resultado);
  }
     console.log('conversor', conversor);
     const   resultadoConversor1  =  conversor.EUR_ARS  
     const   resultadoConversor2  =  conversor.USD_ARS

    return(
        <>
       <div  className='w-100 '>
       <div className='row w-100 '>
            <div className='col-md-4 col-sm-12 shadow w-100 p-3 my-3 '>
                <br/>
                <p> 
                    <FontAwesomeIcon 
                         className='btn-outline-dark' 
                         icon={ faCalendarCheck} >
                    </FontAwesomeIcon> 
                    {fechaActual}
                </p>
                 <p> 
                    {clima.name}  -  {!clima.sys ? '' : clima.sys.country}  
                </p> 
            </div>
            <div className='col-md-4 col-sm-12 shadow w-100 p-3 my-3'>
                <h7> 
                    <FontAwesomeIcon 
                           className='btn-outline-dark'
                           icon={ faCloudSunRain} >
                    </FontAwesomeIcon> 
                     Clima de Hoy 
                </h7>
                <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                     <img 
                         src={ `http://openweathermap.org/img/wn/${!clima.weather ? '' :  
                                clima.weather[0].icon}@2x.png`} 
                      /> 
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <p> 
                         <strong className='btn-outline-dark'>Temperatura:</strong> 
                         {clima.main ===  undefined ? '' : clima.main.temp}°C
                      </p> 
                      <p> 
                         <strong className='btn-outline-dark'>Humedad:</strong>   
                         { !clima.main  ? '' : clima.main.humidity} %       
                      </p>
                      <p> 
                        <strong className='btn-outline-dark'> Estado:</strong>     
                         {!clima.weather ? '' : clima.weather[0].main}     
                      </p> 
                  </div>
                </div >
          </div>
          <div className='col-md-4 col-sm-12 shadow w-100 p-3 my-3'>
               <h7>
                   <FontAwesomeIcon 
                           className='btn-outline-dark'
                           icon={ faMoneyCheckAlt } >
                   </FontAwesomeIcon> 
                    Valor monedas extranjeras
                 </h7>
                 <br/>
                 <br/>
                 <h5> 
                   <FontAwesomeIcon
                          className='btn-outline-dark' 
                          icon={faEuroSign} >
                    </FontAwesomeIcon>
                    <strong className='btn-outline-dark'> EURO: </strong> {resultadoConversor1} 
                 </h5>
                 <h5> 
                    <FontAwesomeIcon 
                          className='btn-outline-dark' 
                          icon={faDollarSign} >
                    </FontAwesomeIcon> 
                    <strong className='btn-outline-dark'> DOLAR: </strong>  {resultadoConversor2}
                 </h5> 
            </div>
         </div>
       </div>
     </>
    )
 }       


export default ApiDePrueba;

// <p>  <strong>Descripción:</strong>  {!clima.weather ? '' : clima.weather[0].description} </p> 



