import React from 'react';
import './posts.scss'
import PostItem from './../postitem/PostItem';
const Posts = () => {
    return (
        <div className="posts">
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    );
};

export default Posts;