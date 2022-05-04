import React from 'react';

import './singlepage.scss'
import SideBar from './../../components/sidebar/SideBar';
import SinglePost from '../../components/singlepost/SinglePost';
import Footer from './../../components/footer/Footer';

const SinglePage = () => {
    return (
        <>
            <div className="singlepage">
                <SinglePost />
                <SideBar />
            </div>
            <Footer />
        </>
    );
};

export default SinglePage;