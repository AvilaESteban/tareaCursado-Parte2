import React from 'react';
import CardColores from './CardColores';

const ListaColores = (props) => {
    return(
        <>
        <div className='d-flex justify-content-between'>
           {
             props.colores.map((color,index)=> (
                 <CardColores
                     color={color}
                     key={index}
                     eliminarColor ={props.eliminarColor}
                 />
             ))
           }
        </div>
        </>
    )
}

export default ListaColores;