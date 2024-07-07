// @ts-nocheck
import React, { useState } from 'react';
import AddArticle from './AddArticle';
import Articles from './Articles';
import Header from './Header';
import Paginate from './Paginate';
function Home() {
    let [currentPage, setCurrentPage] = useState('0');

    return (
        <>
            <Header />
            <Paginate
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Articles currentPage={currentPage} />
        </>
    );
}

export default Home;
