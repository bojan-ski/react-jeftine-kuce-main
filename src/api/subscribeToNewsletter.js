// firebase/firestore funcs
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
// utils
import getCurrentTimeAndDate from "../utils/getCurrentTimeAndDate";
// toastify
import { toast } from "react-toastify";


const subscribeToNewsletter = async (userEmail) => {
    try {
        const newsletterSubscriber = {
            email: userEmail,
            userSubscribed: getCurrentTimeAndDate(),
            timestamp: serverTimestamp()
        }

        await addDoc(collection(db, 'newsletterSubscribers'), newsletterSubscriber)

        return true
    } catch (error) {
        // error message
        toast.error('Greška prilikom prosleđivanja Vaše email adrese, molimo Vas probajte ponovo')

        return false
    }
}

export default subscribeToNewsletter