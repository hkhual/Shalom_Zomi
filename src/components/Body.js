import React, { Component } from "react";
import table from '../images/table_background.jpeg';
import bible_book from '../images/brown-book-page.jpg';
import worship from '../images/hands-worship.jpg';

import worship_lead from '../images/IMG_0100.JPG';

class Body extends Component {
  render() {
    return (
      <div className="body-main">
        <h2>Imaging sliding</h2>
        <img src={table} alt="table background" width="700px" height="500px" />
        <img src={bible_book} alt="Bible Book" width="700px" height="500px" />
        <img src={worship} alt="Worship" width="700px" height="500px" />
        <img src={worship_lead} alt="group" width="700px" height="500px" />
      </div>
    );
  }
}
export default Body;
