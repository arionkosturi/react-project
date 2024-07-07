// @ts-nocheck
import React, { useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from './ui/pagination';
function Paginate({ currentPage, setCurrentPage }) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => {
                            if (currentPage > 0)
                                setCurrentPage((prevPage) => +prevPage - 1);
                        }}
                    />
                </PaginationItem>
                {/* <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem> */}
                {/* <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem> */}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => {
                            setCurrentPage((prevPage) => +prevPage + 1);
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
export default Paginate;
