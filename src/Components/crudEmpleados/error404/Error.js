import React from 'react';
import Img from '../image/imgError1.png';
import { Link } from 'react-router-dom';

const Error = () => {
    return(
        <>
          <div className=''>
            <img src={Img} alt='1'  className=' w-100'></img>
            <h2 className='text-danger'>Page not found</h2>
            <Link to='/' className='btn btn-outline-success  my-3'>
                Volver a Inicio ?
            </Link>
          </div>
        </>
    )
}

export default Error;