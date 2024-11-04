// firebase
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { auth, db } from "../firebase.config"
// toastify
import { toast } from "react-toastify"


const userSignUp = async (accountType, username, email, password) => {   
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

        const newUser = userCredentials.user

        updateProfile(auth.currentUser, {
            displayName: username
        })

        // await sendEmailVerification(newUser)

        const userCredentialsCopy = {
            accountType,
            username,
            email,
            timestamp: serverTimestamp()
        }

        await setDoc(doc(db, 'users', newUser.uid), userCredentialsCopy)

        return true
    } catch (error) {
        // error message if entered email address is in use
        toast.error('Email adresu koju ste uneli je u upotrebi, molimo Vas probajte drugu email adresu.')

        return false
    }
}

export default userSignUp