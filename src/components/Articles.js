import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:3344/news/',
});

function Articles() {
    const [articles, setArticles] = useState([]);
    React.useEffect(() => {
        api.get('/').then((res) => {
            setArticles(res.data);
        });

        return () => {};
    }, []);
    let show_after_deleted = () => {
        api.get('/').then((res) => {
            setArticles(res.data);
        });
    };

    return articles.map((article) => {
        let handleDelete = () => {
            api.delete(`/${article._id}`)
                .then((response) => {
                    show_after_deleted();
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        return (
            <div
                onClick={() => console.log(article._id)}
                className="flex container mx-auto border my-1"
                key={article._id}
            >
                <div className="flex p-2 ">
                    <img className="w-1/3 my-2" src={article.imgUrl} />
                    <h1 className="font-bold mx-4 my-2  text-purple-400">
                        {article.title}
                    </h1>
                </div>
                {/* Delete Button */}
                <FaTrash
                    onClick={handleDelete}
                    className="mt-4 w-48 hover:text-red-600"
                />
            </div>
        );
    });
}

export default Articles;
