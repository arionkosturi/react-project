// @ts-nocheck
import React, { useState } from "react";
import { useFetchArticles } from "../components/hooks/useFetchArticles";
import Paginate from "./Paginate";
function PublicArticles() {
  const [currentPage, setCurrentPage] = useState(0);
  const { data: articles } = useFetchArticles(currentPage);
  return (
    <>
      <Paginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        articles={articles}
      />
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 container mx-auto">
        {articles?.map((article) => {
          return (
            <article
              key={article._id}
              className="flex bg-white shadow-xl hover:shadow-xl my-3"
            >
              <div className="flex flex-row w-1/2">
                <a href={`article?id=${article._id}`}>
                  <img
                    alt=""
                    src={article.imgUrl}
                    className="w-full h-34 p-1"
                  />
                </a>
              </div>

              <div className="flex flex-col justify-between w-1/2">
                <div className="border-gray-900/10 border-s p-2 sm:p-4 sm:border-l-transparent">
                  <a href={`article?id=${article._id}`}>
                    <h3 className="line-clamp-2 sm:line-clamp-3 font-bold text-gray-900 dark:text-white uppercase">
                      {article.title}
                    </h3>
                  </a>

                  <p className="line-clamp-3 mt-4 dark:text-gray-50">
                    {" "}
                    {article.description}
                  </p>
                </div>

                <div className="sm:flex sm:justify-end sm:items-end">
                  <a
                    href={`article?id=${article._id}`}
                    className="block bg-purple-500 hover:bg-purple-400 mx-2 px-5 py-3 font-bold text-center text-gray-100 text-xs uppercase transition"
                  >
                    Lexo me shume...
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default PublicArticles;
