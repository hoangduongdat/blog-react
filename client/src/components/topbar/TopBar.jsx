import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../../assets/img/boy.jpg'
import authSlice from '../../redux/authSlice'
import { PF } from '../../constant'

import './topbar.scss'
const menuNav = [{
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
]

const TopBar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    const { pathname } = useLocation()

    const [toggleMenu, setToggleMenu] = useState(false)


    const handleToggleMenu = () => {
        setToggleMenu(toggleMenu => !toggleMenu);
    }

    const handleLogout = () => {
        dispatch(authSlice.actions.logout())
    }
    return (
        <div className="topbar">
            <div className="topbar-left">
                <h1 className="topbar-left__blogname">R u b y.</h1>
            </div>
            <ul className={`topbar-center ${toggleMenu && 'active'} `}>
                {menuNav.map((item, index) => (<li
                    key={index}
                    className={`topbar-center__item ${pathname === item.path ? 'active' : ''}`}
                    onClick={handleToggleMenu}
                >
                    <Link to={item.path}>{item.displayName}</Link>
                </li>))
                }
                {user ? <li><Link onClick={handleLogout} to='/login'>LogOut</Link></li> : ""}


            </ul>
            <div className="topbar-right">
                {user ? <Link to={`/users/${user._id}`}>
                    <img className="topbar-right__avatar" src={(user.profilePicture && PF + user.profilePicture) || Avatar} alt="" />
                </Link> : (
                    <>
                        <ul className={`topbar-right__menu ${toggleMenu && 'active'} `}>
                            <li onClick={handleToggleMenu}><Link to='/login'>Login </Link></li>
                            <li onClick={handleToggleMenu}><Link to='/register'>Register </Link></li>
                        </ul>
                    </>
                )}

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