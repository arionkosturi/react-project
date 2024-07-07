// @ts-nocheck
import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const api = axios.create({
    baseURL: 'http://localhost:3344/news/',
});

function Articles({ currentPage }) {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    console.log(currentPage);
    React.useEffect(() => {
        api.get(`/?p=${currentPage}`).then((res) => {
            setArticles(res.data);
        });
        return () => {};
    }, [currentPage]);
    let show_after_deleted = () => {
        api.get('/').then((res) => {
            setArticles(res.data);
        });
    };
    return articles.map((article) => {
        let handleDelete = () => {
            api.delete(`/${article._id}`)
                // @ts-ignore
                .then((response) => {
                    show_after_deleted();
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        let handleEdit = () => {
            navigate(`edit?id=${article._id}`);
        };

        return (
            <div
                className="flex container mx-auto border my-1"
                key={article._id}
            >
                <div className="flex p-2 ">
                    <img className="w-1/3 my-2" src={article.imgUrl} />
                    <div>
                        <h1 className="font-bold mx-4 my-2  text-purple-400">
                            {article.title}
                        </h1>
                        <p className="text-sm mx-4 text-slate-400 ">
                            {article.description}
                        </p>
                    </div>
                </div>
                {/* Delete Button */}
                <FaTrash
                    onClick={handleDelete}
                    className="mt-4 w-48 hover:text-red-600"
                />
                <FaPencilAlt
                    onClick={handleEdit}
                    className="mt-4 w-48 hover:text-red-600"
                />
            </div>
        );
    });
}

export default Articles;
