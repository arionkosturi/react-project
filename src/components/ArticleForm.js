import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function ArticleForm() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3344/news/', {
                title,
                description,
                imgUrl,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
   
    };
    return (
        <div className="flex flex-col container gap-2 mx-auto">
            <h1>NEW ARTICLE</h1>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                placeholder="Enter Title"
                name="title"
                className="border"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <label htmlFor="title">Description</label>
            <input
                type="text"
                id="description"
                placeholder="Enter Description"
                name="description"
                className="border"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <label htmlFor="title">Img Source</label>
            <input
                type="text"
                id="imgUrl"
                placeholder="Enter Img Source"
                name="imgUrl"
                className="border"
                value={imgUrl}
                onChange={(e) => {
                    setImgUrl(e.target.value);
                }}
            />

            <div className='flex border border-red-300'>
              <span className='p-6'>Image Preview:</span>
            <img className='w-1/3 my-6' src={imgUrl} />
            </div>
           
            <div className="mx-auto container">
                <form>
                   <Link to='/'>
                    <button className="mx-4 border shadow w-1/5">
                    Cancel</button></Link>
                    <button className="mx-4 border bg-red-600 text-white shadow w-1/5">
                        Delete
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="mx-4 border shadow bg-green-600 text-white w-1/5"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ArticleForm;
