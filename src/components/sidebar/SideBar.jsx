import React from 'react';
import './sidebar.scss'
import HeaderImg from './../../assets/img/headerbg.jpg'
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-item__title">About Me</span>
                <img src={HeaderImg} alt="" />
                <p>lorem ipsum dolor sit amet lorem, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet</p>
            </div>

            <div className="sidebar-item">
                <span className="sidebar-item__title">Categories</span>
                <ul className="sidebar-item__list">
                    <li><a href="#">Life</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Style</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Tech</a></li>
                    <li><a href="#">Cinema</a></li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-item__title">Follow Us</span>
                <div className="sidebar-item__social">
                    <i class="fa-brands fa-facebook-square"></i>
                    <i class="fa-brands fa-instagram-square"></i>
                    <i class="fa-brands fa-twitter-square"></i>
                    <i class="fa-brands fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBar;