import React from 'react';


const Contact = () => {
    return (
        <div className="contact-form">
            <p>Contacting page</p>
            <form>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" /><br />
                <label for="fpassword">Passowrd:</label><br />
                <input type="password" name="lpassword" />
            </form>
        </div>
    );
}

export default Contact;