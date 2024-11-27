import React from 'react'
// context
import { useGlobalContext } from "../../../context";
// firebase
import { auth } from "../../../firebase.config";
import { signOut } from "firebase/auth";
// toastify
import { toast } from "react-toastify";


const LogOutBtn = () => {
    const { setUserData } = useGlobalContext()

    const logOutUser = async () => {
        if (window.confirm('Da li ste sigurni da želite da se odjavite')) {
            try {
                await signOut(auth)

                setUserData({
                    isLoggedIn: false,
                    userID: '',
                    userName: '',
                    userEmail: '',
                    userAccountType: '',
                    userVerified: false
                })

                // success message
                toast.success('Uspešno ste se odjavili');

                // redirect user
                setTimeout(() => window.location.href = '/', 50)
            } catch (error) {
                //error message
                toast.error('Greška prilikom odjave, molimo Vas probajte ponovo')
            }
        }
    }

    return (
        <button type="button" className="btn btn-warning text-white px-2 py-1" onClick={logOutUser}>
            Odjavi se
        </button>
    )
}

export default LogOutBtn