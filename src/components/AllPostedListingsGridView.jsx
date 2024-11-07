// component
import PostedListingGridViewCard from "./PostedListingGridViewCard.jsx"


const AllPostedListingsGridView = ({ displayedListingsList }) => {
    return (
        <div className='row'>
            {(displayedListingsList !== null && displayedListingsList.length > 0) && (
                displayedListingsList?.map(postedListing => {
                    return <PostedListingGridViewCard key={postedListing.id} postedListing={postedListing} />
                })
            )}
        </div>
    )
}

export default AllPostedListingsGridView