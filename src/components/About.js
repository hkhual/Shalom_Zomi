import React from 'react';

function About() {
    return (
        <div>
            <div className="about_main">
                <h2 style={{ textAlign: "center", fontSize: "1.8em" }}>About us</h2>
                <h3>Shalom Zomi Baptist Church</h3>
                <ul>
                    <p style={{ fontStyle: "bold" }}>Church's Schedule</p>
                    <li>Saturday: 7:00PM</li>
                    <li>Sunday: 11:30AM</li>
                </ul>

            </div>
        </div>
    );
}


function Tick(props) {
    const element = (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

const elementDate = <Tick name="Sarah" />;

const myStyle = {
    color: "white",
    backgroundColor: "purple",
    fontFamily: "Arial"
};


function Avator(props) {
    return (
        <img className="Avatar"
            src={props.user.avatorUrl}
            alt={props.user.name}
        />
    );
}


//Props are Read-Only


//Pure function
function Sum(a, b) {
    return a + b;
}

//Impure function
function Withdraw(account, amount) {
    account.total -= amount;
}








export default About;
