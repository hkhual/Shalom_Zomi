import React from "react";
import "./Footer.css";
import fbIcon from '../images/facebook_icon.png';

function Footer() {
  return (
    <div className="footer-main">
      <div>Copyright: 2020, SZBC.</div>

      <div className="footer-images">
        <a target="_blank" href="https://www.facebook.com/shalomchurchclt/" rel="noopener noreferrer">
          <img src={fbIcon} alt="Facebook" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
