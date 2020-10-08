import React, {useState, useRef} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import '../crudEmpleados.css';

const EditarEmpleados = (props) => {
    const [department, setDepartment] = useState("");
    const [error, setError] = useState(false);


     const fullNameRef = useRef(" ");
     const titleRef = useRef(" ");
     const picRef = useRef(" ");

    const selectDepartment = (e) => {
        setDepartment(e.target.value);
      };
    
      const handleSubmit = async (e) => {
         e.preventDefault();
         const _department = (department === " ")?props.empleoyeeId && props.empleoyeeId.department : department;
         console.log(_department);
        //  console.log(fullNameRef);
        //  console.log(fullNameRef.current.value);
        //  console.log(titleRef.current.value);
        if(fullNameRef.current.value.trim() === '' ||
           titleRef.current.value.trim() === '' ||
           picRef.current.value.trim() === '' ||
           _department === '' ){
             setError(true);
             return;
           }
           setError(false);
           const empleoyeeModif = {
               fullName : fullNameRef.current.value,
               title : titleRef.current.value,
               pic : picRef.current.value,
               department : _department
           }
           try {
               const cabecera = {
                   method : "PUT",
                   headers: {
                       "Content-Type" : "application/json"
                   },
                   body: JSON.stringify(empleoyeeModif)
                }
               const consult = await fetch( `http://localhost:4000/empleados/${props.empleoyeeId.id}`, cabecera);
               if(consult.status === 200){
                   props.setRecargarEmpleados(true);
                   Swal.fire(
                       "modified employee",
                       "successfully", 
                       "success"
                   )
               }
           } catch (error) {
               console.log(error);
           }
      }

    return(
        <>
         <div className="container ">
         <Form onSubmit={handleSubmit}>
          <h2 className='p-2 my-4'>Edit Employee</h2>
         {
          (error) ? (
          <Alert variant={"danger"}>All fields are required</Alert>
         ) : null
         }
        
          <Form.Group controlId="fullNameId">
            <Form.Label>FullName</Form.Label>
            <Form.Control
              type="text"
              placeholder=" Enter name / last Name"
             ref={fullNameRef}
             defaultValue={props.empleoyeeId && props.empleoyeeId.fullName}
            />
          </Form.Group>

          <Form.Group controlId="titleId">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter profession"
              ref={titleRef}
              defaultValue={props.empleoyeeId && props.empleoyeeId.title}
            />
          </Form.Group>

          <Form.Group controlId="titleId">
            <Form.Label>Pictures </Form.Label>
            <Form.Control
              type="text"
              placeholder="enter codigo image"
              ref={picRef}
              defaultValue={props.empleoyeeId && props.empleoyeeId.pic}
            />
          </Form.Group>

          <h3>Department</h3>
          <div>
            <Form.Check
              type="radio"
              name="department"
              label="Business"
              value="Business"
              onChange={selectDepartment}
              defaultChecked={props.empleoyeeId && props.empleoyeeId.department === "Business"}
              inline
            />
            <Form.Check
              type="radio"
              name="department"
              label="Marketing"
              value="Marketing"
              onChange={selectDepartment}
              defaultChecked={props.empleoyeeId && props.empleoyeeId.department === "Marketing"}
              inline
            />
            <Form.Check
              type="radio"
              name="department"
              label="Engineering"
              value="Engineering"
              onChange={selectDepartment}
              defaultChecked={props.empleoyeeId && props.empleoyeeId.department === "Engineering"}
              inline
            />
          </div>

          <Button className="my-4 p-2 w-50 " variant="outline-success" type="submit">
              Save
          </Button>
        </Form>
      </div>
        
        </>
    )
}

export default EditarEmpleados;