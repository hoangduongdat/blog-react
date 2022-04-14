import React from 'react';

import './singlepage.scss'
import SideBar from './../../components/sidebar/SideBar';
import SinglePost from '../../components/singlepost/SinglePost';

const SinglePage = () => {
    return (
        <div className="singlepage">
            
            <SinglePost/>
            <SideBar/>
        </div>
    );
};

export default SinglePage;