import React from 'react';
import './header.scss'


const Header = () => {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-titles__sm">React & Node</span>
                <span className="header-titles__lg">Blog</span>
            </div>
           <div className="header-img"></div>
        </div>
    );
};

export default Header;