// context
import { useGlobalContext } from "../../context";
// utils func
import scrollToTop from "../../utils/scrollToTop";
// react icons
import { GrNext, GrPrevious } from "react-icons/gr";


const PostedListingsPagination = () => {
    const { listings, page, fetchListings, condition } = useGlobalContext()

    const handleNextPage = () => {
        fetchListings(page + 1, condition);
        scrollToTop()
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            fetchListings(page - 1, condition);
            scrollToTop()
        }
    };

    return (
        < section className="pagination-btn my-5 d-flex align-items-center justify-content-between" >
            <p className="fw-bold text-muted mb-0 fs-5">
                Broj stranice:
                <span className="text-dark ms-2">
                    {page + 1}
                </span>
            </p>

            <div className="pagination-btn-container">
                <button className="btn me-3" onClick={handlePreviousPage} disabled={page === 0}>
                    <GrPrevious className="text-white" />
                </button>
                <button className="btn" onClick={handleNextPage} disabled={listings.length === 0}>
                    <GrNext className="text-white" />
                </button>
            </div>
        </section >
    )
}

export default PostedListingsPagination