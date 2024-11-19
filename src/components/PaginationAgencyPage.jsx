import React from 'react'
// utils func
import scrollToTop from "../utils/scrollToTop";
// React Icons
import { GrNext, GrPrevious } from "react-icons/gr"


const PaginationAgencyPage = ({ fetchData, userID, page, isLoading }) => {
    const handleNextPage = () => {
        fetchData(page + 1, userID);
        scrollToTop()
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            fetchData(page - 1, userID);
            scrollToTop()
        }
    };

    return (
        < section className="pagination d-flex align-items-center justify-content-between" >
            <p className="fw-bold text-muted mb-0 fs-5">
                Stranica:
                <span className="text-dark ms-2">
                    {page + 1}
                </span>
            </p>

            <div className="pagination-btn-container">
                <button className="btn px-3 me-3 btn-prev" onClick={handlePreviousPage} disabled={isLoading || page === 0}>
                    <GrPrevious className="text-white" />
                </button>
                <button className="btn px-3 btn-next" onClick={handleNextPage} disabled={isLoading}>
                    <GrNext className="text-white" />
                </button>
            </div>
        </section >
    )
}

export default PaginationAgencyPage