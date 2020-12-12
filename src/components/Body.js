import React, { Component } from "react";
import Slideshow from './Slideshow.js';
import About from './About.js';
import Footer from './Footer.js';
import fbIcon from '../images/facebook_icon.png';

class Body extends Component {

  render() {
    return (
      <div>
        <div className="body-main">
          <Slideshow />
          <About />
        </div>
        <div className="footer-main">
          <p>Copyright: 2020, SZBC.</p>
          <div className="footer-images">
            <a target="_blank" href="https://www.facebook.com/shalomchurchclt/" rel="noopener noreferrer">
              <img src={fbIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

    );
  }
}
export default Body;
