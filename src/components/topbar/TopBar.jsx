import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../../assets/img/boy.jpg'

import './topbar.scss'
const  menuNav =[{
    displayName: 'Home',
    path: '/',
},
{
    displayName: 'About',
    path: '/about',
},
{
    displayName: 'Contact',
    path: '/contact',
},
{
    displayName: 'Write',
    path: '/write',
},
{
    displayName: 'LogOut',
    path: '/logout',
}]

const TopBar = () => {

    const { pathname } = useLocation()
    console.log(pathname)

    const [toggleMenu,setToggleMenu] =useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(toggleMenu=>!toggleMenu);
    }

    return (
        <div className="topbar">
           <div className="topbar-left">
                <h1 className="topbar-left__blogname">R u b y.</h1>
           </div>
           <ul className={`topbar-center ${toggleMenu && 'active'} `}>
               {menuNav.map((item,index) => ( <li 
                    key={index} 
                    className={`topbar-center__item ${pathname===item.path ? 'active' : ''}`}
                    onClick={handleToggleMenu}
                    >
                   <Link to={item.path}>{item.displayName}</Link>
                </li>))

                }
             
           </ul>
           <div className="topbar-right">
                <img className="topbar-right__avatar" src={Avatar} alt="" />
                <div className="topbar-right__icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="topbar-right__toggle" onClick={handleToggleMenu}>
                    <i class="fa-solid fa-bars"></i>
                </div>
           </div>
        </div>
    );
};

export default TopBar;