//Brenda
import React from "react";
import reactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './style.css';

const Footer = () => {
    return (
        <footer>
            <h6>© Copyright 2021, Fiance Tracker.</h6>
            <a href="#">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.twitter.com/" >
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </footer>
    )
}

export default Footer;