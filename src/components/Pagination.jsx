import React from 'react'
// components
import PaginationUI from './PaginationUI';


const Pagination = ({ fetchData, page, queryParam, isLoading }) => {
    const handleNextPage = () => {
        queryParam ? fetchData(page + 1, queryParam) : fetchData(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            queryParam ? fetchData(page - 1, queryParam) : fetchData(page - 1);
        }
    };

    return <PaginationUI page={page} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} isLoading={isLoading}/>
}

export default Pagination