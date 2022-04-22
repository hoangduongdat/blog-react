import React from 'react';
import './singlepost.scss'
import HeaderImg from './../../assets/img/headerbg.jpg'

const SinglePost = () => {
    return (
        <div className="singlepost">
            <div className="singlepost-wrapper">
                <img src={HeaderImg} alt="" />
                <h1 className="singlepost-wrapper__title">
                    lorem ipsum displayName
                    <div className="singlepost-wrapper__title-edit">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-alt"></i>
                    </div>
                </h1>
                
                <div className="singlepost-wrapper__info">
                    <span className="singlepost-wrapper__info-auth">Author: <b>Safak</b></span>
                    <span className="singlepost-wrapper__info-date">1 hour ago</span>
                </div>
                <p className="singlepost-wrapper__content">
                    lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                    lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                    lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                    lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                    lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                    lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                    lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                    lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument
                    ofci lorem Ips y Argument ofci lorem
                    lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci 
                    lorem Ips y Argument ofci lorem Ips y Argument
                </p>
            </div>
        </div>
    );
};

export default SinglePost;