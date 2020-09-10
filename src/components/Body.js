import React, { Component } from "react";
import table from '../images/table_background.jpeg';

class Body extends Component {
  render() {
    return (
      <div class="body-main">
        <h2>Image page</h2>
        <p>Body paragraph</p>
        <img src={table} alt="table background" width="700px" height="500px" />
      </div>
    );
  }
}
export default Body;
