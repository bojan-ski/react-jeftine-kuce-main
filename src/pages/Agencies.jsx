import React from 'react'
import { useLoaderData } from 'react-router-dom'
// api
import fetchAllAgencies from '../api/fetchAllAgencies'
// components
import PageLocation from '../components/PageLocation'
import PageHeader from '../components/PageHeader'
import NoDataAvailableMessage from '../components/NoDataAvailableMessage'
import AgenciesContainer from '../components/agenciesPage/AgenciesContainer'


// LOADER
export const loader = async () => {
    const allAgencies = await fetchAllAgencies()

    return allAgencies
}

const Agencies = () => {
    const allAgencies = useLoaderData()

    return (
        <div className='agencies-page'>
            <PageLocation />

            <div className="container">
                {!allAgencies || allAgencies == 0 ? (
                    <NoDataAvailableMessage text='verifikovanih Agencija' />
                ) : (
                    <>
                        <PageHeader title='Agencije' />

                        <AgenciesContainer />
                    </>
                )}
            </div>
        </div>
    )
}

export default Agencies