import React from 'react'
// api
import deleteUserPostedListing from '../../api/deleteUserPostedListing'
// context
import { useGlobalContext } from '../../context'
// utils
import scrollToTop from '../../utils/scrollToTop'
// toastify
import { toast } from 'react-toastify'


const DeleteListing = ({ userPostedListingID, imageUrls }) => {
    const { selectedProfilePageOption, fetchUserPendingListings, fetchUserActiveListings } = useGlobalContext()

    const handleDeleteListing = async () => {
        const response = await deleteUserPostedListing(userPostedListingID, imageUrls)

        if (response) {
            // re-fetch user listings
            if (selectedProfilePageOption == 'pending-listings') {
                fetchUserPendingListings()
            }

            if (selectedProfilePageOption == 'active-listings') {
                fetchUserActiveListings()
            }

            // success message after listing removal 
            toast.success('Uspešno ste obrisali Vaš oglas');

            //scroll to top
            scrollToTop()
        }
    }

    return (
        <button type="button" className="btn btn-danger fw-bold" onClick={handleDeleteListing}>
            Obriši oglas
        </button>
    )
}

export default DeleteListing