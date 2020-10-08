import React, {useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

const EditarProductos = (props) => {
  
    const  [categoria, setCategoria] = useState("");
    const  [error, setError] = useState(false);
     console.log(props.producto, 'producto  editado')

    // Generar los ref
    const nombreProductoRef = useRef("");
    const precioProductoRef = useRef("");

    const seleccionarCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleSubmit = async (e) => {
       e.preventDefault();
       // Validar
        const _categoria = (categoria === '') ? props.producto.categoria : categoria;
        console.log(_categoria);
        console.log(nombreProductoRef);
        console.log(nombreProductoRef.current.value);
        console.log(precioProductoRef.current.value);
        if(nombreProductoRef.current.value.trim() === "" ||
           precioProductoRef.current.value.trim() === "" ||
           _categoria === ""){
              // mostrar mensaje de alerta
              setError(true);
              return;
           }
        setError(false)
       // agregar el nuevo  producto a mi api
       //  Creo un objeto
        const productoModificado = {
          nombreProducto : nombreProductoRef.current.value,
          precioProducto : precioProductoRef.current.value,
          categoria : _categoria
        }
        try {
          const cabecera = {
            method : 'PUT',
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(productoModificado)
          }
          const consulta = await fetch(`http://localhost:4000/cafeteria/${props.producto.id}`,cabecera)
          console.log(consulta)
          if(consulta.status === 200){
            props.setRecargarProducto(true);
            Swal.fire(
              "Producto Modificado",
              "Exitosamente",
              "success"
            )
            props.history.push('/productos')
          }
        } catch (error) {
          console.log(error);
        }
    }

    return(
        <>
           <section className='container bod1'>
         <Form  onSubmit={handleSubmit}>
            <h2 className='my-4 text-dark ' > Editar Producto</h2>
            {
                (error) ? (<Alert variant={'danger'} > Todos los campos son  obligatorios</Alert> ) : null
            }
          <Form.Group controlId="productId" >
           <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
             type="text" 
             placeholder="Ej: submarino"
             ref={nombreProductoRef} 
             defaultValue={props.producto &&  props.producto.nombreProducto}
             />
          </Form.Group>
          <Form.Group controlId="precioId">
            <Form.Label>Precio</Form.Label>
            <Form.Control 
            type="number"
             placeholder="Ej: $50"
            ref={precioProductoRef}
            defaultValue= {props.producto && props.producto.precioProducto}
            />
          </Form.Group>
          <h3 className="text-dark">Categorias</h3>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check 
              type="radio"
              label="Bebidas calientes" 
              value="bebida-caliente" 
              name="categoria"
              onChange={seleccionarCategoria} 
              defaultChecked={props.producto && props.producto.categoria === 'bebida-caliente'}
              inline/>
            <Form.Check
               type="radio" 
               label="Bebidas frias"
               value="bebida-fria"
               name="categoria"
               onChange={seleccionarCategoria} 
               defaultChecked={props.producto && props.producto.categoria === 'bebida-fria'}
               inline/>
            <Form.Check 
               type="radio"
               label="Sandwich" 
               value="sandwich"
               name="categoria"
               onChange={seleccionarCategoria} 
               defaultChecked={props.producto && props.producto.categoria === 'sandwich'}
               inline/>
            <Form.Check
              type="radio" 
              label="Dulce" 
              value="dulce" 
              name="categoria" 
              onChange={seleccionarCategoria} 
              defaultChecked={props.producto && props.producto.categoria === 'dulce'}
              inline/>
            <Form.Check
              type="radio" 
              label="Salado" 
              value="salado" 
              name="categoria"
              onChange={seleccionarCategoria}
              defaultChecked={props.producto && props.producto.categoria === 'salado'}
              inline/>
          </Form.Group>
          <Button variant="outline-danger" className='w-50 my-4' type="submit">
            Guardar Producto
          </Button>
        </Form>
        </section>
       </>
    )
  
}

export default withRouter(EditarProductos);