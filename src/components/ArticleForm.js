import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
function ArticleForm() {
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
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
            />
            <label htmlFor="title">Description</label>
            <input
                type="text"
                id="description"
                placeholder="Enter Description"
                name="description"
                className="border"
            />
            <label htmlFor="title">Img Source</label>
            <input
                type="text"
                id="imgUrl"
                placeholder="Enter Img Source"
                name="imgUrl"
                className="border"
            />
            <div className="border">
                <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                />
            </div>
            <div className="mx-auto container">
                <form onSubmit={handleSubmit}>
                    <button className="mx-4 border shadow w-1/5">Cancel</button>
                    <button className="mx-4 border bg-red-600 text-white shadow w-1/5">
                        Delete
                    </button>
                    <button className="mx-4 border shadow bg-green-600 text-white w-1/5">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ArticleForm;
