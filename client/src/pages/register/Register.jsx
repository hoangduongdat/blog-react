import React from 'react';
import { Link } from 'react-router-dom';

import './register.scss';

const Register = () => {
    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form  className="register-form">
                <label>Username</label>
                <input type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input type="email" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" placeholder="Enter your password..." />
                <button className="register-form__button">Register</button>
            </form>
            <Link to="/login">
                <button className="register-login__button">Login</button>
            </Link>
            

        </div>
    );
};

export default Register;