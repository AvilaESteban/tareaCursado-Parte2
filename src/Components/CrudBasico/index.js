import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Inicio from './principal/Inicio';
import ListarProductos from './productos/ListarProductos';
import AgregarProductos from './productos/AgregarProductos';
import EditarProductos from './productos/EditarProductos';


import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Banner from './common/Banner';
import { NavItem } from 'react-bootstrap';
import PaginaError from './error404/PaginaError';

const  CrudBasico = ( ) => {
   const [productos, setProductos] = useState([]);
   const [recargarProducto, setRecargarProducto] = useState(true);

   useEffect(()=>{
     if(recargarProducto){
         //  llamar a la api
         consultarApi();
         setRecargarProducto(false);
     }
     
   },[recargarProducto]);

   const consultarApi = async()=>{
     try{
      //  operacion get
        const respuesta = await fetch('http://localhost:4000/cafeteria')
        console.log(respuesta);
        const resultado = await respuesta.json();
        console.log(resultado);
        // guardar datos en  el  state
        setProductos(resultado)

     }catch(error){
       console.log(error)
     }
   }



  return(
    <>
      <Router >
      <Header/>
        <Banner/>
        <Switch>
          <Route exact path='/'>
            <Inicio/>
          </Route>
          <Route exact path='/productos'>
           <ListarProductos
               productos = {productos}
               setRecargarProducto={setRecargarProducto}
           />
          </Route>
          <Route exact path='/productos/nuevo'>
            <AgregarProductos
               setRecargarProducto={setRecargarProducto}
            />
          </Route>
          <Route exact path='/productos/editar/:id' render={(props)=> {
                 // Tomar el id de la ruta
                 const parametro = parseInt(props.match.params.id)
                 // buscar el producto a editar en el arreglo producto
                 const productoBuscado = productos.find( (item) => item.id === parametro)
                 console.log(productoBuscado)
                 // dibujo el componente
                 return   <EditarProductos  
                              producto={productoBuscado}
                              setRecargarProducto={setRecargarProducto}
                           />
               }}>
          </Route>
          <Route exact path='*' > 
              <PaginaError/>
          </Route>
        </Switch>
        <Footer/>
      </Router>

    
    
    
     
    
     
  </>
  )
  
}

export default CrudBasico ;
