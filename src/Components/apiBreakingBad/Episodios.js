import React from 'react';

const Episodios = (props) => {
    return(
      <>

        <div className=''>
        {
           //  props.serie.map(serie => (
                      <div className='card-title bg-dark text-white'  >
                        <ul >
                         <li> Nombre: {props.serie.name}</li>
                         <li> birthday: {props.serie.birthday}</li>
                         <li> occupation: {props.serie.occupation}</li>
                         <li>nickname: {props.serie.nickname}</li> 
                         <li>category: {props.serie.category}</li> 
                        
                         </ul>
                         <div className='card-header bg-secondary'>
                         <img className='w-50' src={props.serie.img}  alt={0}  /> 
                         </div>
                      </div>
                //   ))
              }
        
      </div>
        
      </>
    );
}

export default Episodios;