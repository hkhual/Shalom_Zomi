import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Body from "./components/Body";
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import worship from './images/logo512.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header-link">
            <Link to="/"><img src={worship} alt="cup" className="logoImage" /></Link>
            {/* <Link to="/">Home</Link> */}
            {/* <Link to="/About">About</Link> */}
            {/* <Link to="/Contact">Contact</Link> */}
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            component={Body} />
          {/* <Route
            path="/About"
            component={About} /> */}
          {/* <Route
            path="/Contact"
            component={Contact} /> */}
          <Route
            path="/Privacy"
            component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
