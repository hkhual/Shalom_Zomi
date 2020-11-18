import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const date = new Date();
const year = date.getFullYear();
// const month = date.getMonth();
const day = date.getDay();

let today = '';

switch (day) {
  case 0:
    today = 'Sunday';
    break;
  case 1:
    today = 'Monday';
    break;
  case 2:
    today = 'Tuesday';
    break;
  case 3:
    today = 'Wednesday';
    break;
  case 4:
    today = 'Thursday';
    break;
  case 5:
    today = 'Friday';
    break;
  case 6:
    today = 'Saturday';
    break;

  default:
    today = 'underfined';
}


function Footer() {
  return (
    <div className="footer-main">
      <div>Copyright: 2020 by HK. {year}</div>
      <Link to="/Privacy"><p>Privacy Policy</p></Link>
      <p>Terms and Conditions</p>
      {/* <div>This is {month + 1}</div> */}
      <div>Today is {today}</div>

    </div>
  );
}

export default Footer;
