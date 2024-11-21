import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// api
import userLogin from '../api/userLogin.js'
// utils func
import closeModalOnSubmit from '../utils/closeModalOnSubmit.js'
// components
import ModalHeader from '../components/modals/ModalHeader.jsx'
import ModalFooter from '../components/modals/ModalFooter.jsx'
import FormInput from '../components/FormInput.jsx'
import FormSubmitBtn from '../components/FormSubmitBtn.jsx'
// app assets
import logInModalImg from '../assets/header-assets/jeftine_kuce_login_bg.jpg'
import appNameImg from '../assets/header-assets/jeftine_kuce_logo_text_whit_small.png'
// toastify
import { toast } from 'react-toastify'


const LogIn = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogInSubmit = async e => {
        e.preventDefault()

        setIsLoading(true)

        const enteredEmail = e.target.elements[0].value.trim()
        const enteredPassword = e.target.elements[1].value

        if(enteredEmail == 'admin@admin.com') return setIsLoading(false)

        const response = await userLogin(enteredEmail, enteredPassword)

        if (response) {
            // success message
            toast.success('Uspešno ste se prijavili na portal "Jeftine kuće"')

            // reset form data
            e.target.elements[0].value = ''
            e.target.elements[1].value = ''

            // close Modal on Submit
            closeModalOnSubmit('#logInModal')

            // after the user has logged in, the user is redirected to the Profile page
            navigate('/nalog')
        }

        setIsLoading(false)
    }

    return (
        <div className="modal fade" id="logInModal" tabIndex="-1" aria-labelledby="logInModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content rounded-4 overflow-hidden">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="modal-images col-5 d-none d-xl-block">
                            <img src={logInModalImg} alt="logIn-img" className="modal-img-1 h-100 img-fluid" />
                            <img src={appNameImg} alt="forgotPassword-img" className="modal-img-2" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-xl-7 p-4">
                            {/* modal-header */}
                            <ModalHeader label='Prijava' />

                            {/* modal-body */}
                            <div className="modal-body">
                                <form onSubmit={handleLogInSubmit}>
                                    <FormInput name='email' label='Email adresa (elektronska pošta)' type='email' placeholder="vaša email adresa" maxLength={40} required={true} />

                                    <FormInput name='password' label='Lozinka' type='password' placeholder="vaša lozinka" minLength={6} required={true} />

                                    <FormSubmitBtn isLoading={isLoading} label='Prijavite se' />
                                </form>

                                {/* forgot password btn */}
                                <div className='forgot-password-container text-end'>
                                    <button type="button" className="btn p-0 mt-2" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">
                                        Zaboravili ste lozinku?
                                    </button>
                                </div>
                            </div>

                            {/* modal-footer */}
                            <ModalFooter text='Da li još uvek niste naš registrovani korisnik?' label='Registrujte se' target='#signUpModal' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn