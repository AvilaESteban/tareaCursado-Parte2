import React from 'react';
import Img from '../img/wattsapp.ico'
import Img1 from '../img/instagram.ico'
import Img2 from '../img/twitter.ico'
import Img3 from '../img/face.ico'

const Footer = () => {
    return(
        <>
        <div className='bg-danger text-light '>
        <h6>Derechos Reservados @CafeteriaBreak</h6>
        <div className=''>
           <a href="https://whatsApp.com"> <img src={Img} alt="icono" className='icon'></img>  </a> 
           <a href="http://instagram.com"> <img src={Img1} alt="icono" className='icono'></img>  </a> 
           <a href="https://twitter.com"> <img src={Img2} alt="icono" className='icono'></img>  </a> 
           <a href="https://facebook.com"> <img src={Img3} alt="icono" className='icono'></img>  </a> 
        </div>
        </div>
         
        </>
    )
}

export default Footer;