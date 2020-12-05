import React from "react";
import "./Footer.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import fbIcon from '../images/facebook_icon.png';

function Footer() {
  return (
    <div className="footer-main">
      <div>Copyright: 2020, SZBC.</div>

      <div className="footer-images">
        <a target="_blank" href="https://www.facebook.com/shalomchurchclt/"><img src={fbIcon} alt="Facebook" /></a>
      </div>
    </div>
  );
}

export default Footer;
