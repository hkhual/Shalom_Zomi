import React, { Component } from "react";
import Slideshow from './Slideshow.js';
import About from './About.js';
import Footer from './Footer';

class Body extends Component {

  render() {
    return (
      <div className="body-main">
        <Slideshow />
        <About />
        {/* <Footer /> */}
      </div>

    );
  }
}
export default Body;
