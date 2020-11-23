import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import table from '../images/table_background.jpeg';
import bible_book from '../images/brown-book-page.jpg';
import worship from '../images/hands-worship.jpg';
import church_1 from '../images/church_1.jpg';
import church_2 from '../images/church_2.jpg';
import church_3 from '../images/church_3.jpg';
import worship_lead from '../images/IMG_0100.JPG';
import Gal_Hiam from '../images/Gal_Hiam.jpg';
import Cup from '../images/cup.png';


const slider = (
  <AwesomeSlider>
    <div data-src="../images/cup.png" />
    <div data-src="../images/Gal_Hiam.jpg" />
  </AwesomeSlider>
);

export default slider;



// export default function Slideshow() {
//   return <section className="slideshow">Slideshow</section>;
// }
