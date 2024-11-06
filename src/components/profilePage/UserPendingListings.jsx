import React from 'react'
import { useLoaderData } from 'react-router-dom'


const UserPendingListings = () => {
    const { userPendingPostedListings } = useLoaderData()
    console.log(userPendingPostedListings);


    return (
        <section className="user-pending-listings mb-5">
            {!userPendingPostedListings || userPendingPostedListings.length == 0 ? (
                <h2 className="fw-bold text-center">
                    Trenutno nemate postavljenih oglasa na čekanju
                </h2>
            ) : (
                <>
                    <h2 className="fw-bold text-center mb-5">
                        PENDING
                    </h2>

                    {/* AllPostedListingsGridView component */}
                    {/* <AllPostedListingsGridView displayedListingsList={displayedListingsList.displayedDataList} deleteUserPostedListing={deleteUserPostedListing} /> */}
                </>
            )}
        </section>
    )
}

export default UserPendingListings