import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
    <>
     <nav >
             <ul >
             <li>
                 <Link exact to="/">Inicio</Link>
               </li>
               <li >
                 <Link to="/FormTareas">FormTareas</Link>
               </li>
               <li >
                 <Link to="/Veterinaria">Veterinaria</Link>
               </li>
               <li>
                 <Link to="/CrudEmpleados">CrudEmpleados</Link>
               </li>
               <li>
                 <Link to="/CrudBasico">CrudBasico</Link>
               </li>
               <li>
                 <Link to="/ApiSimpsons">ApiSimpsons</Link>
               </li>
               <li>
                 <Link to="/ApiBreakingBad">ApiBreakingBad</Link>
               </li>
               <li>
                 <Link to="/ConversorMonedas">ConversorMonedas</Link>
               </li>
               <li>
                 <Link to="/ApiClimaMonedaFecha">ApiClimaMonedaFecha</Link>
               </li>
               <li>
                 <Link to="/ApiDePrueba">ApiDePrueba</Link>
               </li>
             </ul>
           </nav>
    
    </>
) ;

export default Navbar;