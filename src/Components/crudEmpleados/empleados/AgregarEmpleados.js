import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import '../crudEmpleados.css';
import {withRouter} from 'react-router-dom';

const AgregarEmpleados = (props) => {
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [pic, setPic] = useState("");
  const [error, setError] = useState(false);

  const selectDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fullName.trim() === '' || title.trim() === ' ' || department === ' ' || pic.trim() === ' '){
      setError(true);
      return;
    }
    setError(false);
    const data = {
      fullName,
      title,
      department,
      pic
    };
    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const resultPost = await fetch(
        "http://localhost:4000/empleados",
        cabecera
      );
      console.log(resultPost);
      if (resultPost.status === 201) {
        props.setRecargarEmpleados(true); 
        Swal.fire(
            "added employee",
            "successfully", 
            "success"
        );
       props.history.push("/empleados");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container ">
       <Form onSubmit={handleSubmit}>
        <h2 className='p-2 my-4 '>Add Employee</h2>
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
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="titleId">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter profession"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="titleId">
            <Form.Label>Pictures </Form.Label>
            <Form.Control
              type="text"
              placeholder="enter codigo image"
              onChange={(e) => setPic(e.target.value)}
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
              inline
            />
            <Form.Check
              type="radio"
              name="department"
              label="Marketing"
              value="Marketing"
              onChange={selectDepartment}
              inline
            />
            <Form.Check
              type="radio"
              name="department"
              label="Engineering"
              value="Engineering"
              onChange={selectDepartment}
              inline
            />
          </div>

          <Button className="my-4 p-2 w-50 " variant="outline-success" type="submit">
            add employee
          </Button>
        </Form>
      </div>
    </>
  );
};

export default withRouter(AgregarEmpleados);
