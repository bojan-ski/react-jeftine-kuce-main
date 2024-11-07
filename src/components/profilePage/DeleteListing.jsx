import React from 'react'
// api
import deleteUserPostedListing from '../../api/deleteUserPostedListing'
// toastify
import { toast } from 'react-toastify'


const DeleteListing = () => {
    const handleDeleteListing = async () => {
        const response = await deleteUserPostedListing()

        if (response) {
            // success message after listing removal 
            toast.success('Uspešno ste obrisali Vaš oglas');
        }
    }

    return (
        <button type="button" className="btn btn-danger fw-bold" onClick={() => handleDeleteListing(postedListing.id)}>
            Obriši oglas
        </button>
    )
}

export default DeleteListing