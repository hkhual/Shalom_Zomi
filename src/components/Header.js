import React, { Component } from "react";
import About from './About';
import Body from './Body';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class Header extends Component {
  render(){
    return (
      <Router>
        <div className="App">
            <div className="header-link">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
            </div>
          </div>
            <Route
              path="/"
              component={Body} />
            <Route
              path="/About"
              component={About} />
            <Route
              path="/Contact"
              component={Contact} />

      </Router>
    );
  }
}

export default Header;
