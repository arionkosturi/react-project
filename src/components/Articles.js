import React, { useState } from 'react';
import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3344/news/',
});
function Articles() {
    const [articles, setArticles] = useState([]);
    React.useEffect(() => {
        api.get('/').then((res) => {
            setArticles(res.data);
        });

        // return () => {
        //   cleanup code if needed
        // }
    }, []);

    return articles.map((article) => {
        return (
            <div
                onClick={() => console.log(article._id)}
                className="container mx-auto border my-1"
                key={article._id}
            >
                <div className="flex p-2">
                    <img className="w-1/3 my-2" src={article.imgUrl} />
                    <div>
                        <h1 className="font-bold mx-4 my-2  text-purple-400">
                            {article.title}
                        </h1>
                        <p className="mx-4">{article.description}</p>
                    </div>
                </div>
            </div>
        );
    });
}

export default Articles;
