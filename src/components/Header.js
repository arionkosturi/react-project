import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';
import AddArticle from './AddArticle';
import { useSearchParams, useLocation } from 'react-router-dom';
export default function Header() {
    const [queryParameter] = useSearchParams();
    let editMode = queryParameter.get('id');
    const location = useLocation();
    let createMode = location.pathname;

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center py-4">
                <div className=" font-semi dark:text-purple-300 text-purple-700 text-xl">
                    <a href="/">
                        <FaRegNewspaper />
                        <p>news</p>
                    </a>
                </div>

                <nav className="z-30 xl:relative top-16 xl:top-0 flex justify-end md:items-center bg-white dark:bg-neutral-800  lg:shadow-none sm:mt-0 xl:mr-10 py-2 w-full">
                    {/* Render button if not 
                    in edit mode or create mode */}
                    {editMode || createMode == '/new' ? (
                        ''
                    ) : (
                        <AddArticle className="hover:bg-slate-50 m-4 shadow border py-1 px-2" />
                    )}
                    {}
                </nav>
            </div>
        </div>
    );
}
