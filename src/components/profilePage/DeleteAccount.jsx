import React from 'react'
// modals
import DeleteAccountModal from '../../modals/DeleteAccountModal'


const DeleteAccount = () => {
    return (
        <>
            <button type="button" className="btn btn-danger py-2 text-white fw-bold" data-bs-toggle="modal" data-bs-target="#deleteAccountModal">
                Obriši nalog
            </button>

            <DeleteAccountModal />
        </>
    )
}

export default DeleteAccount