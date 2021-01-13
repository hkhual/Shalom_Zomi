import React from 'react';
import fbIcon from '../images/facebook_icon.png';
import InstagramIcon from '../images/instagram_icon.png';

import {
    Link
} from 'react-router-dom';


let footerStyle = {
    position: 'absolute',
    marginTop: '300px',
    bottom: 0,
    width: '100%',

    backgroundColor: '#555b6b',
    textAlign: 'center',
    color: 'white',
    marginLeft: '0',
    marginRight: '0'


};

let styleMain = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
};


function NotFound() {
    return (
        <div style={styleMain}>
            <h1>404 Error. Not Found</h1>
            <p>Go back to <Link to="/">homepage</Link></p>
            <div style={footerStyle}>
                <p>Copyright: 2021, SZBC.</p>
                <a target="_blank" href="https://www.facebook.com/shalomchurchclt/" rel="noopener noreferrer">
                    <img src={fbIcon} alt="Facebook" />
                </a>
                <a target="_blank" href="https://www.instagram.com/shalomchurchclt/" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="Instagram" />
                </a>
            </div>
        </div>

    );
}


export default NotFound;

