import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import './posts.scss'
import PostItem from './../postitem/PostItem';
import { getPosts } from '../../redux/postsSlice';



const Posts = () => {
    const dispatch = useDispatch()
    const { search } = useLocation()
    const posts = useSelector(state => state.posts.listPost)

    useEffect(() => {
        dispatch(getPosts(search))
    }, [dispatch, search])

    return (
        <div className="posts">
            {
                posts.map((post, index) => (
                    <Link key={index} to={`/post/${post._id}`}>
                        <PostItem post={post} />
                    </Link>
                ))
            }


        </div>
    );
};

export default Posts;