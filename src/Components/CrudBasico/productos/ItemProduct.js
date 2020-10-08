import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const ItemProduct = (props) => {

    const eliminarProducto = (id) => {
      Swal.fire({
         title: 'Estas seguro de eliminar el producto?',
         text: "No puedes recuperar un producto eliminado!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si, eliminar!',
         cancelButtonText: 'Cancelar'
       }).then( async (result) => {
         if (result.value) {
            try{
               const cabecera = {
                  method: 'DELETE',
                  headers: {
                     "Content-Type": "application/json"
                  }
               }
              const respuesta = await fetch(`http://localhost:4000/cafeteria/${id}` , cabecera);
              console.log(respuesta);
              if(respuesta.status === 200){
                 props.setRecargarProducto(true);
              }
            Swal.fire(
               'Producto eliminado!',
               'Exitosamente',
               'success'
             )
            }catch(error){
               console.log(error);
            }
          
         }
       })
    }

    return(
      <>
        <ListGroup.Item action href="#link1" className="d-flex justify-content-between container">
            <div classNamme='d-flex m-2'>
               <strong> Producto:</strong> {props.producto.nombreProducto}
                <strong> Precio:</strong> ${props.producto.precioProducto} 
            </div>
            <div className='d-flex '>
           <Link  to={`/productos/editar/${props.producto.id}`} className='btn btn-outline-warning m-2'>
              <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>
           </Link>
           <Button 
              variant="outline-danger m-2"
              onClick={() => {eliminarProducto(props.producto.id)}}
           > <FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon></Button>
           </div>
        </ListGroup.Item>
      </>
    );
}

export default ItemProduct;