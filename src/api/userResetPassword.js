// firebase
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase.config';
// toastify
import { toast } from 'react-toastify';


const userResetPassword = async (enteredEmail) => {
    try {
        await sendPasswordResetEmail(auth, enteredEmail)

        return true
    } catch (error) {
        // error message
        toast.error('Email adresu koju ste uneli nije validna, molimo Vas probajte ponovo')

        return false
    }
}

export default userResetPassword