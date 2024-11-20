import React from 'react'
// components
import AllPostedListingsGridView from "../AllPostedListingsGridView"
import AllPostedListingsListView from "../AllPostedListingsListView"


const PostedListingsContainer = ({ layout, listings }) => {
    return (
        < section className="mb-3">
            {layout === 'grid' ? (
                <AllPostedListingsGridView displayedListingsList={listings} />
            ) : (
                <AllPostedListingsListView displayedListingsList={listings} />
            )}
        </section >
    )
}

export default PostedListingsContainer