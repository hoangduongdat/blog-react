import React, { useState } from 'react';
import axios from 'axios'
import './write.scss'

import HeaderImg from './../../assets/img/headerbg.jpg'
import { useSelector } from 'react-redux';

const Write = () => {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const user = useSelector(state => state.auth.user)
    console.log(user.username)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            title,
            desc,
            username: user.username
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post("/upload", data)
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost)
        } catch (err) { }
    }
    return (
        <div className="write">
            {file && <img className="write-img" src={URL.createObjectURL(file) || HeaderImg} alt="" />}

            <form className="write-form" action="/" onSubmit={handleSubmit}>
                <div className="write-form__group">
                    <label htmlFor="fileInput">
                        <i className="fa fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={e => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        className="write-form__group-input"
                        placeholder="Title..."
                        autoFocus={true}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="write-form__group">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="write-form__group-content"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="write-form__submit">Publish</button>
            </form>
        </div>
    );
};

export default Write;