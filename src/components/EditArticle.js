import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import CustomEditor from './CustomEditor';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
const api = axios.create({
    baseURL: 'http://localhost:3344/news/',
});
function EditArticle({ contentValue, setContentValue }) {
    const navigate = useNavigate();

    let handleDelete = (e) => {
        e.preventDefault();
        api.delete(`/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        navigate(`/`);
    };
    let handleSubmit = (e) => {
        e.preventDefault();
        axios
            .patch(
                `http://localhost:3344/news/${id}`,

                {
                    title,
                    description,
                    content,
                    author,
                    sourceUrl,
                    category,
                    imgUrl,
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [content, setContent] = useState();
    const [author, setAuthor] = useState();
    const [sourceUrl, setSource] = useState();
    const [category, setCategory] = useState();

    const [queryParameter] = useSearchParams();
    let id = queryParameter.get('id');
    React.useEffect(() => {
        api.get(`${id}`).then((res) => {
            setTitle(res.data.title);
            setDescription(res.data.description);
            setContent(res.data.content);
            setCategory(res.data.category);
            setAuthor(res.data.author);
            setSource(res.data.sourceUrl);
            setImgUrl(res.data.imgUrl);
        });

        return () => {};
    }, []);

    return (
        <div className="flex flex-col container gap-1 mx-auto">
            <Header
                // @ts-ignore
                className="text-white"
            />

            <h1 className="text-3xl text-purple-600">Edit Article:</h1>
            <label htmlFor="title" className="text-xl">
                Title:
            </label>
            <input
                type="text"
                id="title"
                placeholder="Enter Title"
                name="title"
                className="border p-2"
                value={title}
                onChange={(e) => {
                    // @ts-ignore
                    setTitle(e.target.value);
                }}
            />
            <label htmlFor="description">Description</label>
            <textarea
                type="text"
                id="description"
                placeholder="Enter Description"
                name="description"
                className="border p-2"
                // @ts-ignore
                rows="4"
                value={description}
                onChange={(e) => {
                    // @ts-ignore
                    setDescription(e.target.value);
                }}
            />

            <label htmlFor="content">Content:</label>
            <CustomEditor
                // @ts-ignore
                contentValue={content}
                setContentValue={setContent}
            />

            <label htmlFor="author">Author:</label>
            <input
                type="text"
                id="author"
                placeholder="Enter Author"
                name="author p-2"
                className="border"
                value={author}
                onChange={(e) => {
                    // @ts-ignore
                    setAuthor(e.target.value);
                }}
            />
            <label htmlFor="source">Source</label>
            <input
                type="text"
                id="source"
                placeholder="Enter Source"
                name="source"
                className="border p-2"
                value={sourceUrl}
                onChange={(e) => {
                    // @ts-ignore
                    setSource(e.target.value);
                }}
            />
            <label htmlFor="category">Category:</label>
            <textarea
                // @ts-ignore
                type="text"
                id="category"
                placeholder="Enter Category"
                name="category"
                className="border"
                value={category}
                onChange={(e) => {
                    // @ts-ignore
                    setCategory(e.target.value);
                }}
            />
            <label htmlFor="title">Img Source</label>
            <textarea
                // @ts-ignore
                type="text"
                id="imgUrl"
                placeholder="Enter Img Source"
                name="imgUrl"
                className="border p-1"
                value={imgUrl}
                onChange={(e) => {
                    // @ts-ignore
                    setImgUrl(e.target.value);
                }}
            />
            <div className="flex border border-red-300">
                <span className="p-6">Image Preview:</span>
                <img className="w-1/3 my-6" src={imgUrl} />
            </div>
            <div className="mx-auto container ">
                <form>
                    <Link to="/">
                        <button className="mx-4 border shadow w-1/5">
                            Cancel
                        </button>
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="mx-4 border bg-red-600 text-white shadow w-1/5"
                    >
                        Delete
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="hover:bg-green-500 mx-4 border shadow bg-green-600 text-white w-1/5"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditArticle;
