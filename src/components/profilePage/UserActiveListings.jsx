import React, { useEffect } from 'react'
// custom hook
import useFetchProfilePageData from '../../hooks/useFetchProfilePageData';
// components
import AllPostedListingsGridView from '../AllPostedListingsGridView';
import Pagination from '../Pagination';


const UserActiveListings = () => {
    const itemsPerPage = 6;
    const { listings: userActiveListings, fetchListings, page } = useFetchProfilePageData(itemsPerPage, 'listings');   

    // Fetch the first page on mount
    useEffect(() => {
        console.log('useEffect - UserActiveListings');

        if(userActiveListings.length== 0){
            console.log('get active listings data');
            fetchListings();
        }
    }, [])

    return (
       <>
        {!userActiveListings || userActiveListings.length == 0 ? (
                <section className="user-pending-listings mb-5">
                    <h2 className="fw-bold text-center">
                        Trenutno nemate postavljenih oglasa
                    </h2>
                </section>
            ) : (
                <>
                    <section className="user-pending-listings mb-3">
                        <AllPostedListingsGridView displayedListingsList={userActiveListings} />
                    </section>

                    <Pagination fetchData={fetchListings} page={page} />
                </>
            )}
       </>
    )
}

export default UserActiveListings