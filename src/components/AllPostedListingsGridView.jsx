// component
import PostedListingGridViewCard from "./PostedListingGridViewCard.jsx"


const AllPostedListingsGridView = ({ displayedListingsList, deleteUserPostedListing }) => {
    return (
        <div className='row'>
            {(displayedListingsList !== null && displayedListingsList.length > 0) && (
                displayedListingsList?.map(postedListing => {
                    return <PostedListingGridViewCard key={postedListing.id} postedListing={postedListing} deleteUserPostedListing={deleteUserPostedListing} />
                })
            )}
        </div>
    )
}

export default AllPostedListingsGridView