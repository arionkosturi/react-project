// @ts-nocheck
import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DeleteAlert from './DeleteAlert';
import CheckPublished from './CheckPublished';
import { useToast } from './ui/use-toast';
import { Toaster } from './ui/toaster';
import { ToastAction } from './ui/toast';

const api = axios.create({
    baseURL: 'http://localhost:3344/news/',
});

function Articles({ currentPage }) {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [published, setPublished] = useState(false);

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
        // setPublished(article.isPublished);
        console.log(article.isPublished);

        // console.log(published);
        // Handle Delete
        let handleDelete = () => {
            api.delete(`/${article._id}`)
                .then((response) => {
                    show_after_deleted();
                })
                .catch((err) => {
                    console.log(err);
                });
            toast({
                variant: 'destructive',
                title: 'Deleted',
                description: 'Artikulli fshi me sukses!',
            });
            setTimeout(() => {
                navigate('/');
            }, 3000);
        };
        // Handle Edit
        let handleEdit = () => {
            navigate(`edit?id=${article._id}`);
        };
        let publishedText = JSON.stringify(article.isPublished);
        return (
            <div
                className="  flex container mx-auto border my-1"
                key={article._id}
            >
                <Toaster />
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
                <section className="flex flex-col gap-1">
                    <CheckPublished
                        isPublished={
                            article.isPublished === true
                                ? 'Published'
                                : 'Archived'
                        }
                        className={
                            article.isPublished === true
                                ? 'border w-24 h-9 mt-2 px-2 bg-green-400'
                                : 'border w-24 h-9 mt-2 px-2 bg-red-400'
                        }
                    />
                    <button
                        onClick={handleEdit}
                        className="border w-24 h-9 flex bg-yellow-200 hover:bg-yellow-500 gap-2 "
                    >
                        <p className="py-1 ms-2 flex">Edit</p>
                        <FaPencilAlt className="m-2 " />
                    </button>

                    {/* Delete Button */}
                    <DeleteAlert
                        handleDelete={handleDelete}
                        alertTitle="Jeni i sigurt?"
                        alertMessage="Jeni duke fshire artikullin nga serveri. Jeni te sigurt per kete veprim?"
                    />
                </section>
            </div>
        );
    });
}

export default Articles;
