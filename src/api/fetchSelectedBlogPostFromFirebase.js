// firebase/firestore funcs
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify"


const fetchSelectedBlogPostFromFirebase = async (id) => {
    try {
        const docRef = doc(db, "blogPosts", id);
        const docSnap = await getDoc(docRef);

        return docSnap.data()       
    } catch (error) {
        // error message
        toast.error('Greška prilikom prikazivanja izabranog post-a, molimo Vas probajte ponovo')
    }
}

export default fetchSelectedBlogPostFromFirebase