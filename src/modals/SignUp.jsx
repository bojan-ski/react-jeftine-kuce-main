// firebase/firestore funcs
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase.config';
// utils func
import closeModalOnSubmit from '../utils/closeModalOnSubmit.js'
// asset
import registrationModalImg from '../assets/header-assets/jeftine_kuce_register_bg.jpg'
import appNameImg from '../assets/header-assets/jeftine_kuce_logo_text_whit_small.png'
// toastify
import { toast } from 'react-toastify'


const SignUp = () => {
    const handleRegistrationSubmit = (e) => {
        e.preventDefault()

        if (e.target.elements[2].value !== e.target.elements[3].value) {
            //error message if both passwords are not the same
            toast.error('Unete šifre nisu istu, molimo Vas probajte ponovo')
        } else {
            const enteredUsername = e.target.elements[0].value.trim()
            const enteredEmail = e.target.elements[1].value.trim()
            const enteredPassword = e.target.elements[2].value

            postCredentials(enteredUsername, enteredEmail, enteredPassword)

            e.target.elements[0].value = ''
            e.target.elements[1].value = ''
            e.target.elements[2].value = ''
            e.target.elements[3].value = ''

            // close Modal on Submit
            closeModalOnSubmit('#signUpModal')
        }
    }

    const postCredentials = async (username, email, password) => {
        try {
            const auth = getAuth()
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

            const newUser = userCredentials.user

            updateProfile(auth.currentUser, {
                displayName: username
            })

            await sendEmailVerification(newUser)

            const userCredentialsCopy = {
                username,
                email,
                timestamp: serverTimestamp()
            }

            await setDoc(doc(db, 'users', newUser.uid), userCredentialsCopy)

            // success message
            toast.success('Vaš nalog na portal "Jeftine kuće" je napravljen. Molimo Vas proverite Vašu elektronsku poštu radi verifikacije Vašeg naloga')

            // after the user has created an account, the user is redirected to the Profile page
            setTimeout(()=>{
                window.location.href ='/nalog'
            },2500)
        } catch (error) {
            // error message if entered email address is in use
            toast.error('Email adresu koju ste uneli je u upotrebi, molimo Vas probajte drugu email adresu.')
        }
    }

    return (
        <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content rounded-4 overflow-hidden">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="modal-images col-5 d-none d-xl-block">
                            <img src={registrationModalImg} alt="registration-img" className="h-100 img-fluid modal-img-1" />
                            <img src={appNameImg} alt="forgotPassword-img" className="modal-img-2" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-xl-7 p-4">
                            {/* modal-header */}
                            <div className="modal-header border-0">
                                <h2 className="modal-title fw-bolder">
                                    Registracija
                                </h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>

                            {/* modal-body */}
                            <div className="modal-body">
                                <form onSubmit={handleRegistrationSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="userRegistrationName" className="col-form-label fw-bolder mb-1">
                                            Korisničko ime
                                        </label>
                                        <input type="text" className="form-control" id="userRegistrationName" placeholder="vaše korisničko ime" maxLength='25' required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="userRegistrationEmail" className="col-form-label fw-bolder mb-1">
                                            Email adresa (elektronska pošta)
                                        </label>
                                        <input type="email" className="form-control" id="userRegistrationEmail" placeholder="vaše email adresa" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="userRegistrationPassword" className="col-form-label fw-bolder mb-1">
                                            Lozinka (min 6 karaktera)
                                        </label>
                                        <input type="password" className="form-control" id="userRegistrationPassword" minLength={6} placeholder="vaše lozinka" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="userConfirmRegistrationPassword" className="col-form-label fw-bolder mb-1">
                                            Potvrda lozinke (min 6 karaktera)
                                        </label>
                                        <input type="password" className="form-control" id="userConfirmRegistrationPassword" minLength={6} placeholder="potvrda vaše lozinke" required />
                                    </div>
                                    <button type="submit" className="registration-btn btn bg-orange-hover fw-bolder text-white py-3 w-100 rounded-4">
                                        Registrujte se
                                    </button>
                                </form>
                            </div>

                            {/* modal-footer */}
                            <div className="modal-footer border-0 justify-content-center">
                                <p>
                                    Već posedujete nalog na našem portalu?
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

export default SignUp