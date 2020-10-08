import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {NavLink} from "react-router-dom";
import '../crudEmpleados.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return(
        <>
          <Navbar className='cssGrad  fixed-top'  expand='lg'>
             <Navbar.Brand className='text-light' >
                 <FontAwesomeIcon icon={ faAngleLeft } ></FontAwesomeIcon>
                 <FontAwesomeIcon icon={ faAngleRight } ></FontAwesomeIcon> Software Company
             </Navbar.Brand>
           <Navbar.Toggle aria-controls="" />
           <Navbar.Collapse id="">
             <div className='d-flex'>
                 <NavLink
                     className='nav-link text-light '
                     exact={true}
                     to='/'
                     activeClassName='active'>
                     Inicio
                 </NavLink>
                 <NavLink 
                     className='nav-link text-light'
                     exact={true} 
                     to='/empleados' 
                     activeClassName='active'>
                     Empleados
                 </NavLink>
                 <NavLink 
                     className='nav-link  text-light' 
                     exact={true} 
                     to='/empleados/nuevo' 
                     activeClassName='active'>
                     Agregar Empleados
                 </NavLink>
             </div>
             </Navbar.Collapse>
          </Navbar>
        </>
    )
}

export default Header;