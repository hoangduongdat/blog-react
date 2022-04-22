import React from 'react';

import './write.scss'
import HeaderImg from './../../assets/img/headerbg.jpg'

const Write = () => {
    return (
        <div className="write">
            <img className="write-img" src={HeaderImg} alt="" />
            <form className="write-form">
                <div className="write-form__group">
                    <label htmlFor="fileInput">
                        <i className="fa fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" className="write-form__group-input" placeholder="Title..." autoFocus="true"  />
                </div>
                <div className="write-form__group">
                    <textarea placeholder="Tell your story..." type="text"className="write-form__group-content"></textarea>
                </div>

                <button className="write-form__submit">Publish</button>
            </form>
        </div>
    );
};

export default Write;