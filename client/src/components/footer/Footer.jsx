import React from 'react';

import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-waves">
                <div className="footer-waves__wave" id="wave1"></div>
                <div className="footer-waves__wave" id="wave2"></div>
                <div className="footer-waves__wave" id="wave3"></div>
                <div className="footer-waves__wave" id="wave4"></div>
            </div>

            <ul className="footer-social__icon">
                <li><a href=""><i class="fa-brands fa-facebook-square"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter-square"></i></a></li>
                <li><a href=""><i class="fa-brands fa-instagram-square"></i></a></li>
                <li><a href=""><i class="fa-brands fa-pinterest-square"></i></a></li>
            </ul>
            <ul className="footer-social__menu">
                <li ><a href="#intro">Home</a> </li>
                <li><a href="#about">About</a> </li>
                <li><a href="#portfolio">Portfolio</a> </li>
                <li><a href="#contact">Contact</a> </li>
            </ul>
            <p>@2022 Hoang Dat | All Rights Reserved</p>
        </div>
    );
};

export default Footer;