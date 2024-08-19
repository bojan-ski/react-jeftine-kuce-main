import { useNavigate } from 'react-router-dom'
// firebase/firestore funcs
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
// utils func
import closeModalOnSubmit from '../utils/closeModalOnSubmit.js'
// app assets
import forgotPasswordModalImg from '../assets/header-assets/forgot_password.jpg'
import appNameImg from '../assets/header-assets/jeftine_kuce_logo_text_whit_small.png'
// toastify
import { toast } from 'react-toastify'


const ForgotPassword = () => {
    const navigate = useNavigate()

    const handleNewPasswordSubmit = (e) =>{
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value.trim()

        resetPassword(enteredEmail)

        e.target.elements[0].value = ''

        // close Modal on Submit
        closeModalOnSubmit('#forgotPasswordModal')
    }

    const resetPassword = async (enteredEmail) => {
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, enteredEmail)

            // success message
            toast.success('Proverite vaš email radi promere šifre');

            // after the user has submitted for a new password, the user is redirected to the Profile page
            navigate('/nalog')
        } catch (error) {
            // error message
            toast.error('Email adresu koju ste uneli nije validna, molimo Vas probajte ponovo')
        }
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
                            <div className="modal-header border-0">
                                <h2 className="modal-title fw-bolder">
                                    Zaboraviliste šifru?
                                </h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>

                            {/* modal-body */}
                            <div className="modal-body">
                                <form onSubmit={handleNewPasswordSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="userEmail" className="col-form-label fw-bolder mb-1">
                                            Email adresa (elektronska pošta)
                                        </label>
                                        <input type="email" className="form-control" id="userEmail" placeholder="vaše email adresa" required />
                                    </div>
                                    <button type="submit" className="forgot-password-btn btn bg-orange-hover fw-bolder text-white py-3 w-100 rounded-4">
                                        Nova Šifra
                                    </button>
                                </form>
                            </div>

                             {/* modal-footer */}
                             <div className="modal-footer border-0 justify-content-center">
                                <p>
                                    Ne treba vam nova lozinka?
                                </p>
                                <button type="button" className="text-orange-hover btn p-0 m-0" data-bs-toggle="modal" data-bs-target="#logInModal">
                                    Prijavite se
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword