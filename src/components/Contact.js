import React from 'react';

function Contact() {
    return (
        <div>
            <div className="body-main">
                <div className="contact-form">
                    <h2 style={{ textAlign: 'center', fontSize: '1.8em' }}>Contact</h2>
                    <form>
                        <label for="fname">First name:</label><br />
                        <input type="text" id="fname" name="fname" /><br />
                        <label for="lname">Last name:</label><br />
                        <input type="text" id="lname" name="lname" /><br />
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;