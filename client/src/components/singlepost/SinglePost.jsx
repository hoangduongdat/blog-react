import React, { useEffect, useState } from 'react';
import './singlepost.scss'
import HeaderImg from './../../assets/img/headerbg.jpg'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetail } from './../../redux/postsSlice';
import { PF } from '../../constant'

import axios from 'axios';
import Write from '../write/Write';

const SinglePost = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const postDetail = useSelector(state => state.posts.postDetail)
    const user = useSelector(state => state.auth.user)
    const loading = useSelector(state => state.posts.loading.postsDetail)
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect(() => {
        dispatch(getPostDetail(postId))
    }, [postId, dispatch])

    const handleDeletePost = async () => {
        try {
            await axios.delete(`/posts/${postDetail._id}`, {
                data: {
                    postId: postDetail._id,
                    username: user.username,
                    filename: postDetail.photo
                }
            })
            navigate(`/?user=${user.username}`)
        } catch (err) { console.log(err) }
    }

    const handleEditPost = () => {
        setIsUpdate(true);
    }
    return (
        <>
            {isUpdate ? <Write postUpdate={postDetail} /> : (
                <div className="singlepost">
                    <div className="singlepost-wrapper">
                        <div className="singlepost-wrapper__image">
                            {
                                loading ? (<span className="skeleton-box img"></span>) :
                                    (<img src={PF + postDetail.photo || HeaderImg} alt="" />)
                            }
                        </div>

                        <h1 className="singlepost-wrapper__title">
                            {loading ? (<span className="skeleton-box small"></span>) : postDetail.title}
                            {postDetail.username === user?.username && (
                                <div className="singlepost-wrapper__title-edit">
                                    <i onClick={handleEditPost} className="fa fa-edit"></i>
                                    <i onClick={handleDeletePost} className="fa fa-trash-alt"></i>
                                </div>
                            )}
                        </h1>

                        <div className="singlepost-wrapper__info">
                            <span className="singlepost-wrapper__info-auth">Author:
                                <b>{loading ? (<span className="skeleton-box"></span>) :
                                    <Link to={`/?user=${postDetail.username}`}>{postDetail.username}</Link>}</b>
                            </span>
                            <span className="singlepost-wrapper__info-date">{new Date(postDetail.createdAt).toDateString()}</span>
                        </div>

                        <div className="singlepost-wrapper__content">
                            {loading ? (<span className="skeleton-box"></span>) : <div dangerouslySetInnerHTML={{ __html: postDetail.desc }} />}
                        </div>
                    </div>
                </div>
            )

            }
        </>

    );
};

export default SinglePost;