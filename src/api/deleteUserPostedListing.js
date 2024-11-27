// api
import deleteUploadedImageFromDB from "./deleteUploadedImageFromDB"
// firebase
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase.config"
// toastify
import { toast } from "react-toastify"


const deleteUserPostedListing = async (userPostedListingID, imageUrls) => {
    if (window.confirm('Da li ste sigurni da želite da obrišete Vaš oglas?')) {
        try {
            // delete image/images from storage
            Array.from(imageUrls).forEach(imageUrl => {
                deleteUploadedImageFromDB(imageUrl)
            })

            // delete listing from firebase
            await deleteDoc(doc(db, 'listings', userPostedListingID))

            return true
        } catch (error) {
            //error message
            toast.error('Greška prilikom uklanjanja Vašeg oglasa, molimo Vas probajte ponovo')          

            return false
        }
    }
}

export default deleteUserPostedListing