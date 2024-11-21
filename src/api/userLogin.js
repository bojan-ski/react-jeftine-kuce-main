// firebase
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase.config"
// toastify
import { toast } from "react-toastify"


const userLogin = async (enteredEmail, enteredPassword) => {
    try {
        await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)

        return true
    } catch (error) {
        // error message
        toast.warning('Kredencijale koje ste uneli nisu validni, molimo Vas probajte ponovo')

        return false
    }
}

export default userLogin