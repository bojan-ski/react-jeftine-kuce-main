import React from 'react'
// context
import { useGlobalContext } from '../../context';
// components
import AllPostedListingsGridView from '../AllPostedListingsGridView';
import Pagination from '../Pagination';


const UserPendingListings = () => {
    const { userPendingListings, fetchUserPendingListings, curPendingListingsPage, isPendingListingsLoading } = useGlobalContext();

    return (
        <>
            {!userPendingListings || userPendingListings.length == 0 ? (
                <section className="user-pending-listings mb-5">
                    <h2 className="fw-bold text-center">
                        Trenutno nemate postavljenih oglasa na čekanju
                    </h2>
                </section>
            ) : (
                <>
                    <section className="user-pending-listings mb-3">
                        <AllPostedListingsGridView displayedListingsList={userPendingListings} />
                    </section>

                    <Pagination fetchData={fetchUserPendingListings} page={curPendingListingsPage} isLoading={isPendingListingsLoading}/>
                </>
            )}
        </>
    )
}

export default UserPendingListings