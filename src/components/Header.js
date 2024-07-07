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

                {/* <div className="searchDiv flex -space-x-16 mx-10 xl:ml-40 rounded-full w-3/5 xl:w-full text-purple-700 dark:text-purple-300 group hover:ring ring-purple-300">
                    <input
                        type="search"
                        id="search__input"
                        className=" border-purple-600 bg-white dark:bg-neutral-900 focus:ring-opacity-70 p-2 border border-opacity-30 rounded-full w-full focus:outline-none focus:ring focus:ring-purple-600"
                        placeholder="Start typing to search..."
                    />
                    <form action="#" className="search">
                        <button type="button" className="search__submit-btn">
                            <div className="flex text-center">
                                <i className="group-hover:bg-purple-600 group-hover:text-white group-active:bg-green-900 bg-purple-300 dark:bg-slate-900 bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full w-16 text-xl hover:text-white fa fa-search"></i>
                            </div>
                        </button>
                    </form>
                </div> */}

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
