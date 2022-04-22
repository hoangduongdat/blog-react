import React from 'react';
import './posts.scss'
import PostItem from './../postitem/PostItem';
import { Link } from 'react-router-dom';
const Posts = () => {
    return (
        <div className="posts">
            <Link to={`/post/123`}><PostItem/></Link>
            <Link to={`/post/123`}><PostItem/></Link>
            <Link to={`/post/123`}><PostItem/></Link>
            <Link to={`/post/123`}><PostItem/></Link>
            <Link to={`/post/123`}><PostItem/></Link>
            <Link to={`/post/123`}><PostItem/></Link>
        </div>
    );
};

export default Posts;