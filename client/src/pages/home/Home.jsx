import React from 'react';
import Header from '../../components/header/Header';
import './home.scss'
import Posts from './../../components/posts/Posts';
import SideBar from './../../components/sidebar/SideBar';


const Home = () => {

    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
        </>
    );
};

export default Home;