import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sidebar.scss'
import HeaderImg from './../../assets/img/headerbg.jpg'

import { getCategories } from '../../redux/categoriesSlice'
import { Link } from 'react-router-dom';
const SideBar = () => {
    const dispatch = useDispatch();
    const { categories, loading } = useSelector(state => state.cate)
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-item__title">About Me</span>
                <img src={HeaderImg} alt="" />
                <p>“Life is like riding a bicycle. To keep your balance, you must keep moving.” ―――― Albert Einstein ――――</p>
            </div>

            <div className="sidebar-item">
                <span className="sidebar-item__title">Categories</span>
                <ul className="sidebar-item__list">
                    {
                        categories.map((category, index) => (
                            loading ? (<span key={index} className="skeleton-box "></span>) :
                                <li key={index}>
                                    <Link to={`/?cat=${category.name}`}>{category.name}</Link>
                                </li>
                        ))
                    }
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