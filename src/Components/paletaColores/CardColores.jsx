import React from 'react';

const CardColores = (props) => {
    return(
       <>
            <div className="card ">
                 <div className="card-header">
                  {props.color}
                 </div>
            <div className="card-body"  
                    style={{
                        backgroundColor: props.color
                    }}
                    > </div>   
              <div className='card-footer'>
                 <button onClick={() => {props.eliminarColor(props.color)}}  className='btn btn-danger'>Delete</button>
              </div>
            </div>
       </>
    )
}

export default CardColores;

