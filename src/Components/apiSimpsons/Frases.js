import React from 'react';
import Card from 'react-bootstrap/Card';


const Frases = (props) => {
    return(
      <>
      <Card>
         <Card.Header>Los Simpsons</Card.Header>
        <Card.Body>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>
                    <img  src={props.personaje.image}  alt={props.personaje.character} ></img>
                </div>
                <div className='col-sm-12 col-md-8'>
                  <Card.Title>{props.personaje.character}</Card.Title>     
                  <Card.Text>
                   {props.personaje.quote}
                 </Card.Text>
               </div>
           </div>
        </Card.Body>
      </Card>
      </>
    );
}

export default Frases;