import React, { useEffect } from 'react'
// custom hook
import useFetchProfilePageData from '../../hooks/useFetchProfilePageData';
// components
import AllPostedListingsGridView from '../AllPostedListingsGridView';
import Pagination from '../Pagination';


const UserPendingListings = () => {
    const itemsPerPage = 6;
    const { listings: userPendingListings, fetchListings, page } = useFetchProfilePageData(itemsPerPage, 'pendingListings');   

    // Fetch the first page on mount
    useEffect(() => {
        console.log('useEffect - UserPendingListings');

        if(userPendingListings.length== 0){
            console.log('get pending listings data');
            fetchListings();
        }
    }, [])

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

                    <Pagination fetchData={fetchListings} page={page} />
                </>
            )}
        </>
    )
}

export default UserPendingListings