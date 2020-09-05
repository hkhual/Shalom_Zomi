import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-link">
          <a href="#home" alt="Home">
            Home
          </a>
          <a href="#about" alt="About">
            About
          </a>
          <a href="#contact" alt="contact">
            Contact
          </a>
          <a href="#support" alt="support">Support</a>
        </div>
      </div>
    );
  }
}

export default Header;
