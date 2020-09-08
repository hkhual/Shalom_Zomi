import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
