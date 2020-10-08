import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'


const ElementoLi = (props)=> {
    return(
        <li className='list-group-item d-flex justify-content-between'>
           {props.nombreTarea}
           <button className='btn btn-danger' onClick={() => {props.borrarTarea(props.nombreTarea)}}> <FontAwesomeIcon icon={faArchive} ></FontAwesomeIcon> </button>
        </li>
    );
}

export default ElementoLi;