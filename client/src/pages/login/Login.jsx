import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice'

import './login.scss';

const Login = () => {
    const dispatch = useDispatch();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(login({
            username: username,
            password: password
        }))
        console.log({
            username: username,
            password: password
        })
    }
   
    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form  className="login-form">
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username..." 
                    onChange={e=>setUsername(e.target.value)} 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password..."
                    onChange={e=>setPassword(e.target.value)} 
                />
                <button className="login-form__button" onClick={handleLogin}>Login</button>
            </form>
            <Link to='/register'>
                <button className="login-register__button">Register</button>
            </Link>

        </div>
    );
};

export default Login;