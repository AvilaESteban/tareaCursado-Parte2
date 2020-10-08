import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import ItemProduct from './ItemProduct';

const ListarProductos = (props) => {
    return(
        <>  
        <div>
            <h1 className='my-2 p-2'>Lista de Productos</h1>
         <ListGroup>
            {
              props.productos.map((producto) =>( 
                 <ItemProduct
                    key={producto.id}
                    producto= {producto}
                    setRecargarProducto={props.setRecargarProducto}
                 />
              ))  
            }
         </ListGroup>
         </div>
        </>
    )
}

export default ListarProductos;

