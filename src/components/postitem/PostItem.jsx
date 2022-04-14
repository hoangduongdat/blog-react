import React from 'react';
import './postitem.scss'

import HeaderImg from './../../assets/img/headerbg.jpg'

const PostItem = () => {
    return (
        <div className="postitem">
            <img className="postitem-img" src={HeaderImg} alt="" />
            <div className="postitem-info">
                <div className="postitem-info__cats">
                    <span>Music</span>
                    <span>Life</span>
                </div>
                <span className="postitem-info__title">
                    lorem Ips y Argument ofci
                </span>
                <hr />
                <span className="postitem-info__date">1 hour ago</span>
            </div>

            <p className="postitem-description">
                lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                lorem Ips y Argument ofci lorem lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem Ips y Argument ofci lorem
                lorem Ips y Argument ofci lorem
            </p>
        </div>
    );
};

export default PostItem;