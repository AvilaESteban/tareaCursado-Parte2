import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom'


const AgregarProductos = (props) => {
     const  [nombreProducto, setNombreProducto] = useState("");
     const  [precioProducto, setPrecioProducto] = useState("");
     const  [categoria, setCategoria] = useState("");
     const  [error, setError] = useState(false);

     const seleccionarCategoria = (e) => {
         setCategoria(e.target.value)
     }

     const handleSubmit = async (e) => {
        e.preventDefault();
        // Validar
        if(nombreProducto.trim() === "" ||
        precioProducto.trim() === "" ||
        categoria === ""){
         // mostrar cartel de error
          setError(true);
          return;
        }
        setError(false);
        // agregar el nuevo  producto a mi api
        // crear el objeto a enviar
        const datos = {
            nombreProducto,
            precioProducto,
            categoria
        };
        
        try{
        //   aqui me  conecto con mi api
        const cabecera = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        }
        const resultado = await fetch("http://localhost:4000/cafeteria", cabecera)  
        console.log(resultado);
        if(resultado.status === 201){
           props.setRecargarProducto(true)
            Swal.fire(
                'Producto Agregado Exitosamente',
                'El producto se creo correctamente',
                'success'
            )
            props.history.push("/productos");
        }

        }catch(error){
           console.log(error);
        }

     };

    return(
        <>
        <section className='container bod1'>
         <Form  onSubmit={handleSubmit}>
            <h2 className='my-4 text-dark ' > Agregar Nuevo Producto</h2>
            {
                (error) ? (<Alert variant={'danger'} > Todos los campos son  obligatorios</Alert> ) : null
            }
          <Form.Group controlId="productId">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control type="text" placeholder="Ej: submarino" onChange={(e) => setNombreProducto(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="precioId">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="Ej: $50" onChange={(e) => setPrecioProducto(e.target.value)} />
          </Form.Group>
          <h3 className="text-dark">Categorias</h3>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="radio" label="Bebidas calientes" value="bebida-caliente" name="categoria" onChange={seleccionarCategoria}  inline/>
            <Form.Check type="radio" label="Bebidas frias" value="bebida-fria" name="categoria" onChange={seleccionarCategoria}  inline/>
            <Form.Check type="radio" label="Sandwich" value="sandwich" name="categoria" onChange={seleccionarCategoria}  inline/>
            <Form.Check type="radio" label="Dulce" value="dulce" name="categoria"  onChange={seleccionarCategoria}  inline/>
            <Form.Check type="radio" label="Salado" value="salado" name="categoria"  onChange={seleccionarCategoria} inline/>
          </Form.Group>
          <Button variant="outline-danger" className='w-50 my-4' type="submit">
            Agregar
          </Button>
        </Form>
        </section>
        </>
    )
}

export default withRouter(AgregarProductos);