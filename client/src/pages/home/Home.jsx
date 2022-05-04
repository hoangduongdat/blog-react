import React from 'react';
import Header from '../../components/header/Header';
import './home.scss'
import Posts from './../../components/posts/Posts';
import SideBar from './../../components/sidebar/SideBar';
import Footer from './../../components/footer/Footer';


const Home = () => {

    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
            <Footer />
        </>
    );
};

export default Home;