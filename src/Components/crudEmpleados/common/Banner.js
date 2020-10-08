import React  from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img from '../image/soft4.jpg';
import Img1 from '../image/soft5.jpg';
import Img2 from '../image/soft6.jpg';

const Banner = () => {
    return(
      <div className="  ">
       <Carousel  expand="lg">
         <Carousel.Item>
            <img src={Img} alt='1' className=' w-100'></img>
         </Carousel.Item >
         <Carousel.Item>
            <img src={Img1} alt='2' className=' w-100'></img>
         </Carousel.Item >
         <Carousel.Item>
            <img src={Img2} alt='3' className=' w-100'></img>
         </Carousel.Item >
        </Carousel >
        </div>
    );
}

export default Banner;