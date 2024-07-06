import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
function ArticleForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, imgUrl });
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
                    console.log(title);
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
                    console.log(description);
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
                    console.log(imgUrl);
                }}
            />
            {/* <div className="border">
                <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                />
            </div> */}
            <div className="mx-auto container">
                <form>
                    <button className="mx-4 border shadow w-1/5">Cancel</button>
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
