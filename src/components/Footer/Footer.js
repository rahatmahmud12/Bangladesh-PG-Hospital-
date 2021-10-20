import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from 'react-bootstrap';



const Footer = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const telegramIcon = <FontAwesomeIcon icon={faTelegram} />
    const instraIcon = <FontAwesomeIcon icon={faInstagram} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const copyRight = <FontAwesomeIcon icon={faCopyright} />
    return (
        <nav className="sticky-top">
            <div fixed="bottom" className="bg-dark text-white pt-5 pb-3 ">
                <h2>Bangladesh PG Hospital</h2>
                <p><span>{facebookIcon}</span>  <span className="ps-2">{instraIcon} </span>  <span className="ps-2">{telegramIcon}</span> <span className="ps-2">{twitterIcon}</span> </p>
                <br />

                <small>Copyright <span>{copyRight}</span>2021 All rights reserved | Rahat Mahmud</small>

            </div>
        </nav>
    );
};

export default Footer;