import React from 'react';
import { Link } from 'react-router-dom';

function AddArticle() {
    return (
        <Link to="/new">
            <button className=" m-4 shadow border py-1 px-2">
                Add new Article
            </button>
        </Link>
    );
}

export default AddArticle;
