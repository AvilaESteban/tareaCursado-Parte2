import React from 'react';
import './veterinaria.css'

const FormVeterinaria = (props) => {
    return(
        <>
         <h3 className='p-2 '>complete el formulario para crear una cita</h3>
         
         <form  onSubmit={props.handleSubmit} ref={props.myForm}className='formulario container w-50'>
             <label className='w-100 bg-dark text-white my-2 '>nombre de mascota</label>
            <input 
              className={props.borderStyle('nombreMascota')}
              type='text'
              placeholder='ingrese nombre mascota'
              name='nombreMascota'
              onChange={props.handleInput}
              required
              />
               {  
                 props.hasError('nombreMascota') && (
                 <p className='error text-danger'>
                     Campo  obligatorio.
                 </p>
                  )}
             <label className='w-100 bg-dark text-white my-2'>nombre del Dueño</label>
            <input
               className={props.borderStyle('nombreDuenio')}
               type='text'
               placeholder='ingrese nombre del Dueño'
               name='nombreDuenio'
               onChange={props.handleInput}
               required
               />
                {  
                 props.hasError('nombreDuenio') && (
                 <p className='error text-danger'>
                     Campo  obligatorio.
                 </p>
                  )}
             <label className='w-100 bg-dark text-white my-2'>fecha</label>
            <input 
             className={props.borderStyle('fecha')}
             type='date'
             min='2020-08-01'
             max='2025-12-31'
             step='1'
              placeholder='ingrese Fecha'
              name='fecha'
              onChange={props.handleInput}
              required
             />
              {  
                 props.hasError('fecha') && (
                 <p className='error text-danger'>
                     Campo  obligatorio.
                 </p>
               )}
             <label className='w-100 bg-dark text-white my-2 '>Hora</label>
            <input 
             className={props.borderStyle('hora')}
             type='time'
             name='hora'
             min='00:00'
             max='24:00'
             step=''
              placeholder='ingrese Fecha'
              name='hora'
              onChange={props.handleInput}
              required
             />
              {  
                 props.hasError('hora') && (
                 <p className='error text-danger'>
                     Campo  obligatorio.
                 </p>
                  )}
             <label className='w-100 bg-dark text-white my-2 '>Sintomas</label>
            <input
             className={props.borderStyle('sintomas')} 
             type='text'
              placeholder='ingrese Sintomas'
              name='sintomas'
              minLength='1'
              maxLength='25'
              onChange={props.handleInput}
              required
             />
             {  
                 props.hasError('sintomas') && (
                 <p className='error text-danger'>
                     Campo  obligatorio. Hacer breve descripción
                 </p>
                  )}
              <br></br>
             <button type='submit' disabled={!props.formValid} className='btn btn-outline-dark p-2 my-2'>Solicitar cita</button>
         </form>
        </>
    )
}

export default FormVeterinaria;