import React from 'react'
import { useLoaderData } from 'react-router-dom';


const UserActiveListings = () => {
    const { userActivePostedListings } = useLoaderData()
    console.log(userActivePostedListings);

    return (
        <section className="user-active-listings mb-5">
            {!userActivePostedListings || userActivePostedListings.length == 0 ? (
                <h2 className="fw-bold text-center">
                    Trenutno nemate postavljenih oglasa
                </h2>
            ) : (
                <>
                    <h2 className="fw-bold text-center mb-5">
                        AKTIVNI
                    </h2>

                    {/* AllPostedListingsGridView component */}
                    {/* <AllPostedListingsGridView displayedListingsList={displayedListingsList.displayedDataList} deleteUserPostedListing={deleteUserPostedListing} /> */}
                </>
            )}
        </section>
    )
}

export default UserActiveListings