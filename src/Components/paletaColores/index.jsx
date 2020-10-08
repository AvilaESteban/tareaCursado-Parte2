import React, { useState, useEffect } from 'react';
import './paletaColores.css'
import FormColores from './FormColores'
import ListaColores from './ListaColores'

const PaletaColores = () => {
      const [colores, setColores] = useState([]);
      const [color, setColor] = useState('');
      const [inicio,setInicio] =useState(true);

    const  agregarColor = (e) => {
       e.preventDefault();
        if(colores.includes(color)){
            alert('el color ya fue  agregado');
            return;
        }
       setColores(
            [  ...colores,
               color
       ])
    }
    
    // const actualizarColor = (e) => {
    //     setColor([
    //         color = e.target.value
    //     ])
    // }

    const eliminarColor = (nombre) => {
        setColores(colores.filter(color => color !== nombre))
        if(colores.includes(color)){
            alert('Color eliminado satisfactoriamente');
            return;
        }
    }

    useEffect(() => {
        if(inicio){
            let coloresGuardados = JSON.parse(localStorage.getItem('listaColores'));
            if(coloresGuardados){
                setColores(coloresGuardados);
            }
            setInicio(false);
        }
        localStorage.setItem('listaColores',JSON.stringify(colores))
    },[color, colores]);

    return(
        <>
        <div className='p-2  '>
         <form onSubmit={agregarColor} className='form-group text-center' >
           <div className='bg-white w-50 p-2 my-2 text-center'>
               <h3 className='shadow p-2 my-2 '>Administrar Colores</h3>
                <div className='d-flex p-2 my-2 shadow'>
                    <div className=' w-50'
                        style={{
                            backgroundColor:color
                        }}
                    />
                    <input
                       className='form-control w-100'
                       type='text'
                       placeholder='Ingrese un color,ej: Blue'
                       name='color'
                       onChange={(e) => setColor(e.target.value)}
                       value={color}
                    />
                </div>
                <button type='submit' className='btn btn-primary p-2 my-2 shadow'>Guardar</button>
             </div>
            </form>
            </div>
             {/* <FormColores
                agregarColor={agregarColor}
                actualizarColor={actualizarColor}
                color={color}
             /> */}
             <section className='p-2  d-flex shadow w-50 '>
                <ListaColores
                    colores = {colores}
                    eliminarColor = {eliminarColor}
                />
             </section>
        </>
    )
}

export default PaletaColores;