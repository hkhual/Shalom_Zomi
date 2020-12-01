import React, { Component } from "react";
import Slideshow from './Slideshow.js';
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

class Body extends Component {

  render() {
    return (
      <div>
        <div className="body-main">
          <Slideshow />
          <About />
          <Contact />
        </div>
        <Footer />
      </div>

    );
  }
}
export default Body;
