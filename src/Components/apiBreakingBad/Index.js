import React, { useState, useEffect } from 'react';
import Episodios from './Episodios';
import Img from '../apiBreakingBad/img/i1.jpg'
import Spinner from './Spinner';

const ApiBreakingBad = () => {
      const [serie, setSerie] = useState({});
      const [cargando, setCargando] = useState(false);

     useEffect(() => {
        fetchApi();
     },[])

     const fetchApi = async () => {
        setCargando(true);
       const response = await fetch('https://breakingbadapi.com/api/character/random');
       const result= await response.json();
       setSerie(result[0])
       setCargando(false);
       console.log(result[0]);
     }

     const mostrarComponentes = (cargando && !serie.name) ?  <Spinner/> : 
     <Episodios
     serie= {serie}
   />

    return(
       <>
        
         <section className='  my-2 '>
         <div className='bg-secondary text-white'>
           Breaking bad
        </div>
            <article className='bg-secondary'>
                <img className='w-100' src={Img} alt={1}  />
                <button
                   className='w-50 my-5 shadow btn btn-outline-dark text-white border-white'
                   onClick={ () => fetchApi()}
                >Más Breaking Bad.!!!</button>
            </article>
            {mostrarComponentes}
          </section>
       </>
    );
}

export default ApiBreakingBad;