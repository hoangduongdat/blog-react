import React, { useEffect } from 'react';
import './singlepost.scss'

import HeaderImg from './../../assets/img/headerbg.jpg'
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetail } from './../../redux/postsSlice';

const SinglePost = () => {
    const { postId } = useParams();
    const dispatch = useDispatch()

    const postDetail = useSelector(state => state.posts.postDetail)
    const loading = useSelector(state => state.posts.loading.postsDetail)

    useEffect(() => {
        dispatch(getPostDetail(postId))
    }, [postId, dispatch])
    return (
        <div className="singlepost">
            <div className="singlepost-wrapper">
                <div className="singlepost-wrapper__image">
                    {loading ? (<span className="skeleton-box img"></span>) : (<img src={HeaderImg} alt="" />)}
                </div>

                <h1 className="singlepost-wrapper__title">
                    {loading ? (<span className="skeleton-box small"></span>) : postDetail.title}
                    <div className="singlepost-wrapper__title-edit">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlepost-wrapper__info">
                    <span className="singlepost-wrapper__info-auth">Author:
                        <b>{loading ? (<span className="skeleton-box"></span>) :
                            <Link to={`/?user=${postDetail.username}`}>{postDetail.username}</Link>}</b>
                    </span>
                    <span className="singlepost-wrapper__info-date">{new Date(postDetail.createdAt).toDateString()}</span>
                </div>

                <p className="singlepost-wrapper__content">
                    {loading ? (<span className="skeleton-box"></span>) : postDetail.desc}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;