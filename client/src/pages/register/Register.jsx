import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/authSlice'

import './register.scss';

const Register = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required").min(6, "Must be 6 characters or more"),
            email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
            password: Yup.string().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password minimum eight characters, at least one letter and one number")
        }),
        onSubmit: (value) => {
            dispatch(register(value))
        }
    })

    console.log(formik.errors)

    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form className="register-form" action="/" onSubmit={formik.handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your username..."
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                {
                    formik.errors.username && (
                        <span className="register-err">{formik.errors.username}</span>
                    )
                }
                <label>Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter your email..."
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {
                    formik.errors.email && (
                        <span className="register-err">{formik.errors.email}</span>
                    )
                }
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password..."
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {
                    formik.errors.password && (
                        <span className="register-err">{formik.errors.password}</span>
                    )
                }
                <button type="submit" className="register-form__button">Register</button>
            </form>
            <Link to="/login">
                <button className="register-login__button">Login</button>
            </Link>


        </div>
    );
};

export default Register;