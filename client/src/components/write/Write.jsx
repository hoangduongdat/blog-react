import React, { useState } from 'react';
import axios from 'axios'
import './write.scss'
import { useNavigate } from 'react-router-dom'

import HeaderImg from './../../assets/img/headerbg.jpg'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import SelectList from './../selectedlist/SelectList';
import { PF } from '../../constant'

const Write = ({ postUpdate }) => {
    const navigate = useNavigate()
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(postUpdate ? postUpdate.title : "")
    const [desc, setDesc] = useState(postUpdate ? postUpdate.desc : "")
    const [categories, setCategories] = useState([])
    const user = useSelector(state => state.auth.user)
    const handleSubmit = async (e) => {
        e.preventDefault()
        // if update-----
        if (postUpdate) {
            const newPost = {
                postId: postUpdate._id,
                title,
                desc,
                categories,
                username: user.username
            }
            if (file) {
                const data = new FormData()
                const filename = uuidv4() + file.name
                data.append("name", filename)
                data.append("file", file)
                newPost.photo = filename
                try {
                    await axios.post("/upload", data)
                } catch (err) { }
            }
            try {
                await axios.put(`/posts/${postUpdate._id}`, newPost)
                navigate("/")
            } catch (err) { }
        } else { // if post-------
            const newPost = {
                title,
                desc,
                categories,
                username: user.username
            }
            if (file) {
                const data = new FormData()
                const filename = uuidv4() + file.name
                data.append("name", filename)
                data.append("file", file)
                newPost.photo = filename
                try {
                    await axios.post("/upload", data)
                } catch (err) { }
            }

            try {
                await axios.post("/posts", newPost)
                navigate("/")
            } catch (err) { }
        }

    }
    return (
        <div className="write">

            {file ? <img className="write-img" src={URL.createObjectURL(file) || HeaderImg} alt="" /> : (
                postUpdate && (<img className="write-img" src={PF + postUpdate.photo || HeaderImg} alt="" />)
            )}




            <form className="write-form" action='/' onSubmit={handleSubmit}>
                <div className="write-form__group">
                    <label htmlFor="fileInput">
                        <i className="fa fa-plus"></i> add image
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={e => setFile(e.target.files[0])}
                    />
                    <SelectList setCategories={setCategories} />
                    <input
                        type="text"
                        className="write-form__group-input"
                        placeholder="Title..."
                        autoFocus={true}
                        value={title ? title : postUpdate && postUpdate.title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="write-form__group">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="write-form__group-content"
                        value={desc ? desc : postUpdate && postUpdate.desc}
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="write-form__submit">{postUpdate ? 'Update' : 'Publish'}</button>
            </form>
        </div>
    );
};

export default Write;