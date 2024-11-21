import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// api
import userResetPassword from '../api/userResetPassword.js'
// utils func
import closeModalOnSubmit from '../utils/closeModalOnSubmit.js'
// components
import ModalHeader from '../components/modals/ModalHeader.jsx'
import ModalFooter from '../components/modals/ModalFooter.jsx'
import FormSubmitBtn from '../components/FormSubmitBtn.jsx'
import FormInput from '../components/FormInput.jsx'
// app assets
import forgotPasswordModalImg from '../assets/header-assets/forgot_password.jpg'
import appNameImg from '../assets/header-assets/jeftine_kuce_logo_text_whit_small.png'
// toastify
import { toast } from 'react-toastify'


const ForgotPassword = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleNewPasswordSubmit = async (e) => {
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value.trim()

        const response = await userResetPassword(enteredEmail)

        if (response) {
            // success message
            toast.success('Proverite Vašu elektronsku poštu radi promene lozinke');

            // reset form data
            e.target.elements[0].value = ''

            // close Modal on Submit
            closeModalOnSubmit('#forgotPasswordModal')

            // after the user has submitted for a new password, the user is redirected to the Profile page
            navigate('/nalog')
        }

        // loading
        setIsLoading(false)
    }

    return (
        <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content rounded-4 overflow-hidden">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="modal-images col-5 d-none d-xl-block">
                            <img src={forgotPasswordModalImg} alt="forgotPassword-img" className="modal-img-1 h-100 img-fluid slika-1" />
                            <img src={appNameImg} alt="forgotPassword-img" className="modal-img-2" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-xl-7 p-4">
                            {/* modal-header */}
                            <ModalHeader label='Zaboraviliste šifru?' />

                            {/* modal-body */}
                            <div className="modal-body">
                                <form onSubmit={handleNewPasswordSubmit}>
                                    <FormInput name='email' label='Email adresa (elektronska pošta)' type='email' placeholder="vaša email adresa" maxLength={40} required={true} />

                                    <FormSubmitBtn isLoading={isLoading} label='Nova Šifra' />
                                </form>
                            </div>

                            {/* modal-footer */}
                            <ModalFooter text='Ne treba vam nova lozinka?' label='Prijavite se' target='#logInModal' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword