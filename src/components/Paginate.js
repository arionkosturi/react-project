// @ts-nocheck
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

function Paginate({ currentPage, setCurrentPage, isPreviousData, articles }) {
  return (
    <>
      <Pagination className="">
        <PaginationContent className="  hover:cursor-pointer">
          <PaginationItem>
            <PaginationPrevious
              className="text-purple-800 hover:text-purple-500"
              onClick={() => {
                if (currentPage > 0)
                  setCurrentPage((prevPage) => +prevPage - 1);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className="text-purple-800 hover:text-purple-500"
              onClick={() => {
                console.log("click");
                if (articles.length < 9) return;
                setCurrentPage((prevPage) => +prevPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
export default Paginate;
