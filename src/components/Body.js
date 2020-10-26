import React, { Component } from "react";
import table from '../images/table_background.jpeg';
import bible_book from '../images/brown-book-page.jpg';
import worship from '../images/hands-worship.jpg';
import church_1 from '../images/church_1.jpg';
import church_2 from '../images/church_2.jpg';
import church_3 from '../images/church_3.jpg';

import worship_lead from '../images/IMG_0100.JPG';

class Body extends Component {
  render() {
    return (
      <div className="body-main">
        <h2>Imaging sliding</h2>
        <img src={table} alt="table background" width="700px" height="500px" />
        <img src={bible_book} alt="Bible Book" width="700px" height="500px" />
        <img src={worship} alt="Worship" width="700px" height="500px" />
        <img src={church_1} alt="Church 1" width="700px" height="500px" />
        <img src={church_2} alt="Church 2" width="700px" height="500px" />
        <img src={church_3} alt="Church 3" width="700px" height="500px" />

      </div>
    );
  }
}
export default Body;
