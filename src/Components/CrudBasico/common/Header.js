import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import Img from '../img/cafe1.jpg';

import '../CrudBasico.css';

const Header =() =>{
    return(
        <>
         <Navbar bg="danger" variant=''  expand="lg" className="fixed-top">
         <img className='imgCafe' src={Img}  alt={1}  ></img>
           {/* <Navbar.Brand href="#">Cafeteria Break</Navbar.Brand> */}
           <h7 className='text-light'>Cafeteria Break</h7>
           <Navbar.Toggle aria-controls="" />
           <Navbar.Collapse id="">
              <div className='d-flex  '>
                <NavLink
                   exact={true}
                   to='/'
                   className='nav-link text-light '
                   activeClassName='active'
                > Inicio</NavLink>
                 <NavLink
                   exact={true}
                   to='/productos'
                   className='nav-link text-light'
                   activeClassName='active'
                > Productos</NavLink>
                 <NavLink
                   exact={true}
                   to='/productos/nuevo'
                   className='nav-link text-light'
                   activeClassName='active'
                > Agregar Productos</NavLink>
             </div>
           </Navbar.Collapse>
         </Navbar>
        </>
    )
}

export default Header;