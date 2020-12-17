import React, { button } from 'react';

function About() {
    return (
        <div className="about_main">
            <h2 className="headerTimeService" style={{ fontSize: "1.8em" }}>Service Time and Address</h2>
            <button>Click me</button>
            <p className="satCircle">Saturday: 7:00PM</p>
            <p className="satCircle">Sunday: 11:30AM</p>
            <div className="address"><p style={{ fontWeight: 'bold' }}>Location: 7733 Harris Blvd, Charlotte, NC 28212</p></div>

        </div>
    );
}

export default About;
