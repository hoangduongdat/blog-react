import React from 'react';
import './postitem.scss'
import { useSelector } from 'react-redux'

import HeaderImg from './../../assets/img/headerbg.jpg'

const PostItem = ({ post }) => {
    const loading = useSelector(state => state.posts.loading.posts)
    const PF = "http://localhost:5000/images/"

    return (
        <>
            {loading ? <span className="skeleton-box img "> </span> : (
                <div className="postitem">
                    <img className="postitem-img" src={PF + post.photo || HeaderImg} alt="" />
                    <div className="postitem-info">
                        <div className="postitem-info__cats">
                            {post.categories.map((category, index) => (
                                <span key={index}>{category}</span>
                            ))}

                        </div>
                        <span className="postitem-info__title">
                            {post.title}
                        </span>
                        <hr />
                        <span className="postitem-info__date">{new Date(post.createdAt).toDateString()}</span>
                    </div>

                    <p className="postitem-description">
                        {post.desc}
                    </p>
                </div>
            )}
        </>
    );
};

export default PostItem;