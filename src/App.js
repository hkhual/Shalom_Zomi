import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Body from "./components/Body";
import NotFound from './components/NotFound';
import worship from './images/logo512.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="header-link">
          <Link to="/"><img src={worship} alt="Shalom Zomi Baptist Church" className="logoImage" /></Link>
          <h2 className="header-title" style={{ color: 'white' }}>SHALOM ZOMI BAPTIST CHURCH</h2></div>
        <Switch>
          <Route
            exact
            path="/"
            component={Body} />
          <Route component={NotFound} />
        </Switch>

      </Router >
    );
  }
}

export default App;
