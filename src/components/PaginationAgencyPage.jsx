import React from 'react'
// components
import PaginationUI from './PaginationUI';


const PaginationAgencyPage = ({ fetchData, userID, page, isLoading }) => {
    const handleNextPage = () => {
        fetchData(page + 1, userID);
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            fetchData(page - 1, userID);
        }
    };

    return <PaginationUI page={page} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} isLoading={isLoading}/>
}

export default PaginationAgencyPage