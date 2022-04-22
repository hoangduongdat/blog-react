import React from 'react';

import './usersetting.scss'
import SideBar from './../../components/sidebar/SideBar';
import HeaderImg from './../../assets/img/headerbg.jpg'

const UserSetting = () => {
    return (
        <div className="usersetting">
            <div className="usersetting-wrapper">
                <div className="usersetting-wrapper__title">
                    <span className="usersetting-wrapper__title-update">Update Your Account</span>
                    <span className="usersetting-wrapper__title-delete">Delete Account</span>
                </div>
                <div className="usersetting-wrapper__form">
                    <label>Profile Picture</label>
                    <div className="usersetting-wrapper__form-picture">
                        <img src={HeaderImg} alt="" />
                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
        
                    <label>Username</label>
                    <input type="text" placeholder="Safak"/>
                    <label>Email</label>
                    <input type="email" placeholder="Safak@gmail.com"/>
                    <label>Password</label>
                    <input type="password" />
                    <button className="usersetting-wrapper__form-submit">Update</button>
                </div>
            </div>
            <SideBar/>
        </div>
    );
};

export default UserSetting;