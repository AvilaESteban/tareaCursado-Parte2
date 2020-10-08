import React from 'react';
import ItemEmpleado from './ItemEmpleado';
import { ListGroup } from 'react-bootstrap';

const ListarEmpleados = (props) => {
    return(
        <>
        <div className="">
        <h1>list of employees</h1>
        <ListGroup>
        {
            props.employees.map( (employee) => <ItemEmpleado 
                                                    key={employee.id} 
                                                    employee={employee}
                                                    setRecargarEmpleados={props.setRecargarEmpleados}
                                                    />)
        }
        </ListGroup>
        </div>
        
        </>
    )
}

export default ListarEmpleados;