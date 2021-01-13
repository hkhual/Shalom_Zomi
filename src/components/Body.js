import React, { Component } from "react";
import Slideshow from './Slideshow.js';
import About from './About.js';
import fbIcon from '../images/facebook_icon.png';
import InstagramIcon from '../images/instagram_icon.png';

class Body extends Component {

  render() {
    return (
      <div>
        <div className="body-main">
          <Slideshow />
          <About />
        </div>
        <div className="footer-main">
          <p style={{ paddingTop: '10px' }}>Copyright: 2021, SZBC.</p>
          <div className="footer-images">
            <a target="_blank" href="https://www.facebook.com/shalomchurchclt/" rel="noopener noreferrer">
              <img src={fbIcon} alt="Facebook" />
            </a>

            <a target="_blank" href="https://www.instagram.com/shalomchurchclt/" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

    );
  }
}
export default Body;
