import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import table from '../images/table_background.jpeg';
import bible_book from '../images/brown-book-page.jpg';
import worship from '../images/hands-worship.jpg';
import church_1 from '../images/church_1.jpg';
import church_2 from '../images/church_2.jpg';
import church_3 from '../images/church_3.jpg';
import worship_lead from '../images/IMG_0100.JPG';
import Gal_Hiam from '../images/Gal_Hiam.jpg'
import Cup from '../images/cup.png';


function Slideshow() {
  return (
    <div className="slide-show">
      <AliceCarousel autoPlay autoPlayInterval="3000" mouseTracking infinite>
        <img src={table} alt="cup" />,
            <img src={bible_book} alt="cup" />,
            <img src={worship} alt="cup" />,
            <img src={church_1} alt="cup" />,
            <img src={church_2} alt="cup" />,
            <img src={church_3} alt="cup" />,
            <img src={worship_lead} alt="cup" />,
            <img src={Gal_Hiam} alt="cup" />,
            <img src={Cup} alt="cup" />
      </AliceCarousel>
    </div>
  );
}


export default Slideshow;
