import React from  'react';
import { ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemEmpleado = (props) => {

    const deleteEmployee = (id) => {
        Swal.fire({
            title: 'sure you want to delete?',
            text: `to the employee ${props.employee.fullName}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'yes, delete!',
            cancelButtonText: 'Cancel'
          }).then( async (result) => {
              if(result.value){
                  try {
                      const cabecera = {
                          method: "DELETE",
                          headers: {
                              "Content-Type" : "application/json"
                          }
                      }
                      const responseDelete = await fetch(`http://localhost:4000/empleados/${id}` , cabecera)
                      console.log(responseDelete);
                      if(responseDelete.status === 200){
                          props.setRecargarEmpleados(true);
                      }
                       Swal.fire(
                           "eliminated employee",
                           "successfully",
                           "success"
                       )
                  } catch (error) {
                      console.log(error);
                  }
              }
       })
    }
    return(
        <div className='container '>
         <ListGroupItem>
          <div className='d-flex flex-wrap justify-content-center shadow '>
              <div className='  '>
              <img className="rounded-circle" src={`/assets/${props.employee.pic}`} alt={ props.alt} />
              </div>
              <div className='p-5'>
                <p><strong>FullName :</strong> {props.employee.fullName}   </p> 
                <p><strong>Title :</strong> {props.employee.title}   </p> 
                <p><strong>Department :</strong> {props.employee.department}   </p> 
              </div>
           </div>
             <div className='p-2'>
             <Link  to={`/empleados/editar/${props.employee.id}`} className='btn btn-outline-success mr-5 '>
                 Edit
              </Link>
              <Button variant='outline-danger'  onClick={() => {deleteEmployee(props.employee.id)}}>
                  Delete 
              </Button>
             </div>
         </ListGroupItem>
         </div>
    )
}

export default ItemEmpleado;