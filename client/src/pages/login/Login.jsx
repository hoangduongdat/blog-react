import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authSlice'

import './login.scss';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const islogin = useSelector(state => state.auth.islogin)

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({
            username: username,
            password: password
        }))
    }

    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form className="login-form" onSubmit={handleLogin}>
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter your username..."
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password..."
                    onChange={e => setPassword(e.target.value)}
                />
                <span className="login-err">{islogin}</span>
                <button className="login-form__button" onClick={handleLogin}>Login</button>
            </form>
            <Link to='/register'>
                <button className="login-register__button">Register</button>
            </Link>

        </div>
    );
};

export default Login;