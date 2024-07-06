import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useNavigate, Link, useParams } from 'react-router-dom';
import EditArticle from './EditArticle'
const api = axios.create({
    baseURL: 'http://localhost:3344/news/',
});

function Articles() {
   const navigate = useNavigate();
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
   
      let handleEdit = () => {
        
        navigate(`edit?id=${article._id}`)
      }

        return (
            <div
                onClick={() => console.log(article._id)}
                className="flex container mx-auto border my-1"
                key={article._id}
            >
                <div className="flex p-2 ">
                    <img className="w-1/3 my-2" src={article.imgUrl} />
                    <h1 onDoubleClick={()=>{
                      console.log('double click');
                    }}className="font-bold mx-4 my-2  text-purple-400">
                        {article.title}
                    </h1>
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
                {/* <FaPencilAlt id={article._id}
                    onClick={() => {
                      <EditArticle id={article._id}
                      title={article.title}
                      description={article.description}
                      imgUrl={article.imgUrl} />
                    }}
                    className="mt-4 w-48 hover:text-red-600"
                /> */}
               

            </div>
        );
    });
}

export default Articles;
