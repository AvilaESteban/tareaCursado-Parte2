import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => (
    <>
    <h1>Error 404</h1>
    <p>Esta pagina no existe -  <Link to='/'>Atras</Link>  </p>
    <buuton className='btn-dark form-group p-2'><Link to='/'> volver a</Link>Principal</buuton>
    </>
) ;

export default ErrorPage;