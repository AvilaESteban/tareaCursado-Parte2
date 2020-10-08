import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';

import './App.css';
import PaletaColores from './Components/paletaColores/index.jsx';
import Veterinaria from './Components/Veterinaria/index2';
import FormTareas from './Components/ListaTareas/FormTareas';
import ApiSimpsons from './Components/apiSimpsons/index';
import ApiBreakingBad from './Components/apiBreakingBad/Index'
import CrudBasico from './Components/CrudBasico/index';
import CrudEmpleados from './Components/crudEmpleados';
import ConversorMonedas from './Components/api-conversor';
import ApiClimaMonedaFecha from './Components/apiClimaMonedaFecha/ApisClimaMonedaFecha';
import ApiDePrueba from './Components/apiDePrueba/ApiDePrueba';
import Navbar from './Components/Navbar/Navbar';
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Home from './Components/Home/Home';


function App() {
  return (
   <div className="body">
    <div className="App">
    <Router>
         <div>
            <Navbar/>
            <div>
           <Switch>
           <Route exact path='/'>
                <Home/>
             </Route>
             <Route path='/FormTareas'>
                <FormTareas/>
             </Route>
             <Route path='/PaletaColores'>
               <PaletaColores/>
             </Route>
             <Route path='/Veterinaria'>
               <Veterinaria/> 
             </Route>
             <Route path='/CrudEmpleados'>
               <CrudEmpleados/>
             </Route>
             <Route path='/CrudBasico'>
               <CrudBasico/>
             </Route>
             <Route path='/ApiSimpsons'>
               <ApiSimpsons/> 
             </Route>
             <Route exact path='/ApiBreakingBad'>
               <ApiBreakingBad/>
             </Route>
             <Route  path='/ConversorMonedas'>
               <ConversorMonedas/>
             </Route>
             <Route path='/ApiClimaMonedaFecha'>
               <ApiClimaMonedaFecha/>
             </Route>
             <Route path='/ApiDePrueba'>
                <ApiDePrueba/>
             </Route>
             <Route path='*'>
                <ErrorPage/>
             </Route>
           </Switch>
           </div>
         </div>
         </Router> 

    </div>
    </div>
  );
}

export default App;

