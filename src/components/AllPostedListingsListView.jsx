import React from 'react'
// component
import PostedListingListViewCard from "./PostedListingListViewCard.jsx"


const AllPostedListingsListView = ({ displayedListingsList }) => {
  return (
    <div className='row'>
      {displayedListingsList?.map(postedListing => {
        return <PostedListingListViewCard key={postedListing.id} {...postedListing} />
      })}
    </div>
  )
}

export default AllPostedListingsListView