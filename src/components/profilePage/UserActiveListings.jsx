import React from 'react'
// context
import { useGlobalContext } from '../../context';
// components
import AllPostedListingsGridView from '../AllPostedListingsGridView';
import Pagination from '../Pagination';


const UserActiveListings = () => {
    const { userActiveListings, fetchUserActiveListings, curActiveListingsPage, isActiveListingsLoading } = useGlobalContext();

    return (
        <>
            {!userActiveListings || userActiveListings.length == 0 ? (
                <section className="user-active-listings mb-5">
                    <h2 className="fw-bold text-center">
                        Trenutno nemate postavljenih oglasa
                    </h2>
                </section>
            ) : (
                <>
                    <section className="user-active-listings mb-3">
                        <AllPostedListingsGridView displayedListingsList={userActiveListings} />
                    </section>

                    <Pagination fetchData={fetchUserActiveListings} page={curActiveListingsPage} isLoading={isActiveListingsLoading}/>
                </>
            )}
        </>
    )
}

export default UserActiveListings