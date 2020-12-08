import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import imag1 from '../images/church_1.jpg';
import imag4 from '../images/church_4.JPG';
import imag5 from '../images/IMG_0100.JPG';


function Slideshow() {
  return (
    <div className="slide-show">
      <AliceCarousel autoPlay autoPlayInterval="3000" mouseTrackingEnabled={true} infinite fadeOutAnimation={true}>
        <img src={imag1} alt="" className="slideImage" />
        <img src={imag4} alt="" className="slideImage" />
        <img src={imag5} alt="" className="slideImage" />

      </AliceCarousel>
    </div>
  );
}


export default Slideshow;
