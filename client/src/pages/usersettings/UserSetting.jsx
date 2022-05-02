import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './usersetting.scss'
import SideBar from './../../components/sidebar/SideBar';
import HeaderImg from './../../assets/img/headerbg.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import authSlice, { login } from './../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
const UserSetting = () => {
    const [file, setFile] = useState(null)

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //console.log(user)

    const formik = useFormik({
        initialValues: {
            userId: user._id,
            username: user.username,
            email: user.email,
            password: user.password
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required").min(6, "Must be 6 characters or more"),
            email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"),
            password: Yup.string().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password minimum eight characters, at least one letter and one number")
        }),
        onSubmit: async (value) => {
            const newUser = value
            if (file) {
                const data = new FormData()
                const filename = uuidv4() + file.name
                data.append("name", filename)
                data.append("file", file)
                newUser.profilePicture = filename
                try {
                    await axios.post("/upload", data)
                } catch (err) { }
            }
            try {
                await axios.put(`/users/${user._id}`, newUser)
                dispatch(login({
                    username: value.username,
                    password: value.password
                }))
                navigate('/')

            } catch (err) { console.log(err) }
        }
    })

    const handleDeleteAccount = async () => {
        const userDelete = { ...user }
        dispatch(authSlice.actions.logout())
        try {
            await axios.delete(`/users/${userDelete._id}`, {
                data: {
                    userId: userDelete._id
                }
            })
            navigate('/')
        } catch (err) { console.log(err) }
    }
    const PF = "http://localhost:5000/images/"
    return (
        <div className="usersetting">
            <div className="usersetting-wrapper">
                <div className="usersetting-wrapper__title">
                    <span className="usersetting-wrapper__title-update">Update Your Account</span>
                    <span className="usersetting-wrapper__title-delete" onClick={handleDeleteAccount}>Delete Account</span>
                </div>
                <div className="usersetting-wrapper__form">
                    <label>Profile Picture</label>
                    <div className="usersetting-wrapper__form-picture">

                        {/* <img src={URL.createObjectURL(file) || HeaderImg} alt="" /> */}


                        {file ? <img src={URL.createObjectURL(file) || HeaderImg} alt="" /> : (
                            (<img src={PF + user?.profilePicture || HeaderImg} alt="" />)
                        )}
                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            onChange={e => setFile(e.target.files[0])}
                        />
                    </div>
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
                            placeholder="***********"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {
                            formik.errors.password && (
                                <span className="register-err">{formik.errors.password}</span>
                            )
                        }
                        <button type="submit" className="register-form__button">Update</button>
                    </form>

                    {/* <label>Username</label>
                    <input type="text" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" placeholder="***********" />
                    <button onClick={handleSubmit} className="usersetting-wrapper__form-submit">Update</button> */}
                </div>
            </div>
            <SideBar />
        </div>
    );
};

export default UserSetting;