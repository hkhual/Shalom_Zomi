import React from 'react';

function About() {
    return (

        <div className="about_main">
            <h2 style={{ textAlign: "center", fontSize: "1.8em" }}>Service Time and Address</h2>
            <h3 style={{ fontStyle: "bold" }}>Church's Schedule</h3>
            <div className="serviceTime">
                <p className="satCircle">Saturday: 7:00PM</p>
                <p className="satCircle">Sunday: 11:30AM</p>
            </div>
            <p style={{ fontWeight: 'bold' }}>Location: 7733 Harris Blvd, Charlotte, NC 28212</p>
        </div>
    );
}

export default About;
