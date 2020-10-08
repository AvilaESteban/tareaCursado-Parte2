import React,{useState, useEffect} from 'react';
import Lista from './Lista';
import Titulo from './Titulo';
import SubTitulo from './SubTitulo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import './Form.css';

const FormTareas = () => {
    // Aqui se escribe js y crea el state
    const [tareas,setTareas] = useState([]);
    const [tarea, setTarea] = useState('');
    const [inicio, setInicio] = useState(true);


   const handleSubmit = (e) => {
       e.preventDefault();
      
       if(tareas.includes(tarea)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `La tarea ${tarea} ya ha sido agregada anteriormente`,
            footer: '<a href>Atras?</a>',
            // background: 'rgb(2,0,36)',
            // background: 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,77,121,1) 35%, rgba(0,212,255,1) 100%)',
            timer: 5000
          })
        return;
    }
        // opcion 1
       let arreglo = tareas;
       arreglo.push(tarea);
       setTareas(arreglo);
       setTarea('');

    //    opcion 2
    // setTareas([
    //     ...tareas,
    //     tarea
    //  ])
   }
  
   const borrarTarea = (nombre) => {
    //    opcion 1
    //    let arregloMod = tareas.filter((unaTarea)=>{
    //      unaTarea !== nombre
    //      setTareas(arregloMod)
    //    })
    // opcion 2
    setTareas(tareas.filter(tarea => tarea !== nombre))
   }

//    ciclo de vida
   useEffect(() => {
       console.log('Hola useEffect');
       if(inicio){
           //Etapa de Montaje
           console.log('el componente fue montado');
          let tareasGuardadas = JSON.parse(localStorage.getItem('listaTareas'));
          if(tareasGuardadas){
              setTareas(tareasGuardadas);
          }
          setInicio(false);
       }
    //    Etapa de actualización
    console.log('El componente fue actualizado');
    localStorage.setItem('listaTareas',JSON.stringify(tareas));
   },[tarea,tareas]);

    return(
        <>
        <div className='bodi'>
          <Titulo/>
          <SubTitulo
              comision='Nueva'
              frase='Lista de Tareas'
          />
          <div className='container p-2  '>
             <form   className='form-group  p-2 my-2' onSubmit={handleSubmit}>
                <input
                   className='form-group w-50'
                   type='text'
                   placeholder='Ingrese su tarea'
                   name='tarea'
                   onChange={(e)=>setTarea(e.target.value) }
                   value={tarea}
                />
                <button type="submit" className='btn btn-outline-light w-40' >Guardar  <FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon></button>
             </form>
           </div>
           <section className='container w-50'>
               <Lista
                   tareasEnviar = {tareas}
                   borrarTarea = {borrarTarea}
               />
           </section>
           </div>
         </>
     );
}

export default FormTareas;