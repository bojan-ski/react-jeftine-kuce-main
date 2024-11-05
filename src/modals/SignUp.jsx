import { useState } from "react";
// api
import userSignUp from "../api/userSignUp.js";
// utils
import closeModalOnSubmit from '../utils/closeModalOnSubmit.js'
// asset
import registrationModalImg from '../assets/header-assets/jeftine_kuce_register_bg.jpg'
import appNameImg from '../assets/header-assets/jeftine_kuce_logo_text_whit_small.png'
// components
import ModalHeader from "../components/modals/ModalHeader.jsx";
import AccountTypeOptions from "../components/modals/signUp/AccountTypeOptions.jsx";
import FormInput from "../components/FormInput.jsx";
import FormSubmitBtn from "../components/FormSubmitBtn.jsx";
import ModalFooter from "../components/modals/ModalFooter.jsx";
// toastify
import { toast } from 'react-toastify'


const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [accountType, setAccountType] = useState('fizičko')

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (e.target.elements[2].value !== e.target.elements[3].value) {
            //error message if both passwords are not the same
            toast.error('Unete šifre nisu istu, molimo Vas probajte ponovo')

            setIsLoading(false)

            return
        }

        const enteredUsername = e.target.elements[0].value.trim()
        const enteredEmail = e.target.elements[1].value.trim()
        const enteredPassword = e.target.elements[2].value

        const response = await userSignUp(accountType, enteredUsername, enteredEmail, enteredPassword)

        if (response) {
            // success message
            toast.success('Vaš nalog na portal "Jeftine kuće" je napravljen. Molimo Vas proverite Vašu elektronsku poštu radi verifikacije Vašeg naloga')

            // reset form data
            e.target.elements[0].value = ''
            e.target.elements[1].value = ''
            e.target.elements[2].value = ''
            e.target.elements[3].value = ''

            // close Modal on Submit
            closeModalOnSubmit('#signUpModal')

            // redirected user to the Profile page
            setTimeout(() => {
                window.location.href = '/nalog'
            }, 2000)
        }

        // loading
        setIsLoading(false)
    }

    return (
        <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content rounded-4 overflow-hidden">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="modal-images col-5 d-none d-xl-block">
                            <img src={registrationModalImg} alt="registration-img" className="h-100 img-fluid modal-img-1" />
                            <img src={appNameImg} alt="app-logo" className="modal-img-2" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-xl-7 p-4">
                            {/* modal-header */}
                            <ModalHeader label='Registracija' />

                            {/* modal-body */}
                            <div className="modal-body">
                                <AccountTypeOptions accountType={accountType} setAccountType={setAccountType} />

                                <form onSubmit={handleRegistrationSubmit}>
                                    <FormInput name='username' label={accountType == 'fizičko' ? 'Korisničko ime' : 'Naziv agencije'} type='text' placeholder={accountType == 'fizičko' ? "vaše korisničko ime" : 'naziv vaše agencije'} maxLength={25} required={true} />

                                    <FormInput name='email' label='Email adresa (elektronska pošta)' type='email' placeholder="vaša email adresa" maxLength={40} required={true} />

                                    <FormInput name='password' label='Lozinka (min 6 karaktera)' type='password' placeholder="vaša lozinka" minLength={6} required={true} />

                                    <FormInput name='confirmPassword' label='Potvrda lozinke (min 6 karaktera)' type='password' placeholder="potvrda vaše lozinke" minLength={6} required={true} />

                                    <FormSubmitBtn isLoading={isLoading} label='Registrujte se' />
                                </form>
                            </div>

                            {/* modal-footer */}
                            <ModalFooter text='Već posedujete nalog na našem portalu?' label='Prijavite se' target='#logInModal' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp