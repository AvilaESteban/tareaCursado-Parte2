import React  from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img from '../img/cafe3.jpg';
import Img1 from '../img/cafe4.jpg';
import Img2 from '../img/cafe6.jpg';

const Banner = () => {
    return(
      <div className="  ">
       <Carousel  expand="lg">
         <Carousel.Item>
            <img src={Img} alt='1' className=' w-100'></img>
         </Carousel.Item >
         <Carousel.Item>
            <img src={Img1} alt='1' className=' w-100'></img>
         </Carousel.Item >
         <Carousel.Item>
            <img src={Img2} alt='1' className=' w-100'></img>
         </Carousel.Item >
        </Carousel >
        </div>
    );
}

export default Banner;