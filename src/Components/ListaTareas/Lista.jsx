import React from 'react';
import ElementoLi from './ElementoLi';

const Lista = (props) => {
    return(
        <ul className='list-group'>
           {
               props.tareasEnviar.map((item, indice) =>(
                <ElementoLi
                   key={indice} 
                   nombreTarea={item}
                   borrarTarea = {props.borrarTarea}
                 />
               ))
           }
           
        </ul>
    );
}

export default Lista;