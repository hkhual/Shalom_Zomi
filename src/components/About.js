import React from 'react';
// import fontAwesome from '../font-awesome.css';



function About() {
    return (
        <div className="about_main">
            <div className="about_us">
                <h2 className="headerTimeService" style={{ fontSize: "1.8em" }}>Our Mission</h2>
                <p>Love God, Love People, Serve God and serve the World.</p>
            </div>
            <h2 className="headerTimeService" style={{ fontSize: "1.5em", paddingTop: '40px' }}>Service Time and Address</h2>
            <p className="satCircle">Saturday: 7:00PM</p>
            <p className="satCircle">Sunday: 11:30AM</p>
            <div className="address"><p><strong>Location:</strong><br />7733 Harris Blvd<br />
            Charlotte, NC 28212</p></div>
        </div>
    );
}

export default About;
