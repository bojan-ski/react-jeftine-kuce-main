import React, { useState } from 'react'
// api
import deleteUserAccount from '../api/deleteUserAccount';
// firebase
import { auth } from '../firebase.config';
// components
import FormInput from '../components/FormInput';
// toastify
import { toast } from 'react-toastify';


const DeleteAccountModal = () => {   
    const [isLoading, setIsLoading] = useState(false)   

    const handleDeleteAccount = async e => {
        e.preventDefault()

        setIsLoading(true)

        const enteredPassword = e.target.elements[0].value
        
        const response = await deleteUserAccount(auth?.currentUser, auth?.currentUser?.uid, enteredPassword)

        if (response) {
            // success message
            toast.success('Uspešno ste se obrisali Vaš nalog');

            // reset form data
            e.target.elements[0].value = ''

            // redirected user 
            setTimeout(() => window.location.href = '/', 2000)
        }
        setIsLoading(false)
    }

    return (
        <div className="modal fade" id="deleteAccountModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteAccountModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-4">
                        <h4 className='mb-2 text-center'>
                            Molimo Vas da potvrdite Vašu lozinku
                        </h4>

                        <form onSubmit={handleDeleteAccount}>
                            <FormInput name='password' label='Lozinka' type='password' placeholder="vaša lozinka" minLength={6} required={true} />

                            <button type='submit' className='btn bg-orange-hover text-white' disabled={isLoading}>
                                Potvrdi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccountModal