import React from 'react';
import table from '../images/table_background.jpeg';
import bible_book from '../images/brown-book-page.jpg';
import worship from '../images/hands-worship.jpg';
import church_1 from '../images/church_1.jpg';
import church_2 from '../images/church_2.jpg';
import church_3 from '../images/church_3.jpg';
import worship_lead from '../images/IMG_0100.JPG';
import Gal_Hiam from '../images/Gal_Hiam.jpg';


function Contact() {
    return (
        <div className="body-main">
            <div className="contact-form">
                <p>Contacting page</p>
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" /><br />
                    <label for="fpassword">Passowrd:</label><br />
                    <input type="password" name="lpassword" />
                    <button>submit</button>
                </form>
            </div>

            <div className="contact-images">
                <h2>Imaging sliding</h2>
                <img src={table} alt="table background" width="700px" height="500px" />
                <img src={bible_book} alt="Bible Book" width="700px" height="500px" />
                <img src={worship} alt="Worship" width="700px" height="500px" />
                <img src={church_1} alt="Church 1" width="700px" height="500px" />
                <img src={church_2} alt="Church 2" width="700px" height="500px" />
                <img src={church_3} alt="Church 3" width="700px" height="500px" />
                <img src={worship_lead} alt="Church 4" width="700px" height="500px" />
                <img src={Gal_Hiam} alt="book" width="700px" height="500px" />
            </div>
        </div>
    );
}

export default Contact;