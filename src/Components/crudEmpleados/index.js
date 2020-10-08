import React, { useState, useEffect } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListarEmpleados from './empleados/ListarEmpleados';
import AgregarEmpleados from './empleados/AgregarEmpleados';
import EditarEmpleados from './empleados/EditarEmpleados';
import Inicio from './principal/Inicio';
import Header from './common/Header';
import Footer from './common/Footer';
import Banner from './common/Banner';
import Error from './error404/Error';


const CrudEmpleados = () => {
   const [employees, setEmployees] = useState([]);
   const [recargarEmpleados, setRecargarEmpleados] = useState(true);

   useEffect(() => {
      if(recargarEmpleados){
        consultApi();
        setRecargarEmpleados(false)
      }
     
   },[recargarEmpleados])

   const consultApi = async () => {
     try {
       const response = await fetch("http://localhost:4000/empleados");
       const result = await response.json();
       console.log(result);
       setEmployees(result);

     } catch (error) {
       console.log(error);
     }
   }

    return(
       <>
         <Router>
           <Header/>
           <Banner/>
           <Switch>
             <Route exact path="/">
                <Inicio/>
             </Route>
             <Route exact path="/empleados">
                <ListarEmpleados
                       employees={employees}
                       setRecargarEmpleados={setRecargarEmpleados} 
                />
             </Route>
             <Route exact path="/empleados/nuevo">
                 <AgregarEmpleados
                       setRecargarEmpleados={setRecargarEmpleados} 
                 />
             </Route>
             <Route exact path="/empleados/editar/:id"  
                  render={(props) => {
                    const params = parseInt(props.match.params.id)
                    const empleoyeeId = employees.find((empleoyee) => empleoyee.id === params)
                    console.log(empleoyeeId)

                    return  <EditarEmpleados 
                                empleoyeeId={empleoyeeId}
                                setRecargarEmpleados={setRecargarEmpleados} 
                                />
                   }}
                  >
                
             </Route>
             <Route exact path="*">
                  <Error/>
             </Route>
           </Switch>
           <Footer/>
         </Router>
       </>
    )
}

export default CrudEmpleados;



// mongo db contraseña:
// mongodb+srv:
//admin:bBQeLKO4dTEA8S0W@cluster0.mveqw.mongodb.net/<dbname>?retryWrites=true&w=majority


