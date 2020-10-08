import React from 'react';

const SubTitulo = (props) => {
    return(
        <>
          <p>Tarea de la comision {props.comision}</p>
           <h4 className='text-white '>{props.frase}</h4> 
        </>
    )
}

export default SubTitulo;