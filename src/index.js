import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import ArticleForm from './components/ArticleForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/new',
        element: <ArticleForm />,
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
