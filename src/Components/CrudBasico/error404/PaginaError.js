import React from 'react';
import Img from '../img/error1.jpg';
import { Link } from 'react-router-dom';

const PaginaError = () => {
    return(
        <div className=''>
            <img src={Img} alt='1'  className=' w-100'></img>
            <Link to='/' className='btn btn-outline-danger  my-3'>
                Volver a Inicio?
            </Link>
        </div>
    )
}

export default PaginaError;
