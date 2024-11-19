import React from 'react'
// context
import { useGlobalContext } from '../../context'
// components
import AllPostedListingsGridView from '../AllPostedListingsGridView'
import PaginationAgencyPage from '../PaginationAgencyPage'


const SelectedAgencyListings = () => {
    const { selectedAgencyData, allSelectedAgencyListings, fetchAllSelectedAgencyListings, curSelectedAgencyPage, isAllSelectedAgencyListingsLoading } = useGlobalContext()

    return (
        <>
            <h2 className="fw-bold text-center mb-4">
                Svi oglasi {selectedAgencyData.data.agencyName}
            </h2>

            <section className='selected-agency-listings mb-3'>
                <AllPostedListingsGridView displayedListingsList={allSelectedAgencyListings} />
            </section>

            <PaginationAgencyPage fetchData={fetchAllSelectedAgencyListings} userID={selectedAgencyData.data.agencyID} page={curSelectedAgencyPage} isLoading={isAllSelectedAgencyListingsLoading} />
        </>
    )
}

export default SelectedAgencyListings