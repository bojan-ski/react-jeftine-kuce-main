// firebase/firestore funcs
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase.config";
// toastify
import { toast } from 'react-toastify';


const fetchUserDataFromFirebase = async () => {   
    try {
        const docRef = doc(db, "users", auth.currentUser?.uid);
        const docSnap = await getDoc(docRef);

        return docSnap.data()       
    } catch (error) {
        // error message
        toast.error('Greška prilikom registracije naloga, molimo Vas probajte ponovo')
    }
}

export default fetchUserDataFromFirebase