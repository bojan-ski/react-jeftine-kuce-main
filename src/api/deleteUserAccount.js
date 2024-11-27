// firebase
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase.config"
// toastify
import { toast } from "react-toastify"


const deleteUserAccount = async (user, docID, password) => {        
    try {
        // delete from doc
        await deleteDoc(doc(db, 'users', docID))

        // Re-authenticate the user
        const credential = EmailAuthProvider.credential(user?.email, password);
        await reauthenticateWithCredential(user, credential);

        // delete from auth
        await deleteUser(user)

        return true
    } catch (error) {
        //error message
        toast.error('Greška prilikom obrisanja Vašeg naloga, molimo Vas probajte ponovo')
    
        return false        
    }
}

export default deleteUserAccount