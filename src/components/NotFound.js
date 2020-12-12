import React from 'react';
import fbIcon from '../images/facebook_icon.png';

function NotFound() {
    return (
        <div>
            <h1>Not Found</h1>
            <div className="footer-main">
                <p>Copyright: 2020, SZBC.</p>
                <div className="footer-images">
                    <a target="_blank" href="https://www.facebook.com/shalomchurchclt/" rel="noopener noreferrer">
                        <img src={fbIcon} alt="Facebook" />
                    </a>
                </div>
            </div>
        </div>

    );
}


export default NotFound;

