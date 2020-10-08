import React, { useState, useRef } from 'react';
import Titulo from '../Veterinaria/Titulo';
import FormVeterinaria from './FormVeterinaria2';
import './veterinaria.css';

const Veterinaria = () => {
      const [mascotas,setMascotas] = useState([]);
      const [mascota,setMascota] = useState({
          nombreMascota: '',
          nombreDuenio: '',
          fecha: '',
          hora: '',
          sintomas:''
      });
      const [errors, setErrors] = useState([]);
      const [formValid, setFormValid] = useState(false);
      const myForm = useRef(null);

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mascota)
    setMascotas([
        ...mascotas,
        mascota
    ])
    }

 const handleInput = (e) => {
      e.preventDefault()
      console.log(e.target.value)
      const input = e.target;

      setMascota({
        ...mascota,
        // [e.target.name] : e.target.value
        [input.name] : input.value
    })
    handleErrors(input);
    }  

    const eliminarCita = (cita) => {
        setMascotas(mascotas.filter(mascota => mascota !== cita))
    }

  const handleErrors = (input) =>  {
      const isValid = input.checkValidity();
      const inputName = input.name;
      if(!isValid && !errors.includes(inputName)) setErrors([...errors,inputName]);
      if(isValid && errors.includes(inputName)) setErrors(errors.filter((error) => error !== inputName));

      setFormValid(myForm.current.checkValidity());
  }
   
  const hasError = (inputName) => errors.includes(inputName);

   const borderStyle = (inputName) => {
       if(Object.keys(mascota).includes(inputName) && !hasError(inputName))
       return 'valid'
       if(Object.keys(mascota).includes(inputName) && hasError(inputName))
       return 'invalid'

       return '';
   }
   
  

    return(
    <div className='body-vet'>
    <Titulo/>
    <FormVeterinaria
         handleInput = {handleInput}
         handleSubmit={handleSubmit}
         hasError={hasError}
         borderStyle={borderStyle}
         myForm={myForm}
         formValid={formValid}
    />
    <section className='container '>
    <div className='d-flex flex-wrap'>
        {
                   mascotas.length > 0 ? 
                   mascotas.map( (masc, index) => (
                       <div key={index} className='container w-50 '>
                        <div  className='card-header   '>
                           <h2 className=' badge-dark  text-white text-center p-2'>Recordatorio cita:</h2>
                        <h6 className=''>Nombre De Mascota: {masc.nombreMascota} </h6>
                        <h6 className=''>Nombre Del Dueño: {masc.nombreDuenio} </h6>   
                        <h6 className=' '>Fecha : {masc.fecha} </h6>
                        <h6 className=' '>Hora : {masc.hora} </h6>
                        <h6 className=''>Sintomas: {masc.sintomas} </h6>
                        <button className='btn btn-danger' onClick={() => eliminarCita(masc)}>Delete</button>
                       </div>
                  </div>
                  ) )  
                  : (
                    <div className='shadow  badge-dark  text-warning text-center btn-block p-3 my-3'>   
                        <h2>No hay citas</h2> 
                    </div>
                 )
        }
    </div>
    </section>
    </div>
    )
}

export default Veterinaria;