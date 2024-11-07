// api
import deleteUploadedImageFromDB from "./deleteUploadedImageFromDB"
// firebase
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase.config"
// toastify
import { toast } from "react-toastify"


const deleteUserPostedListing = async (userPostedListingID, selectedListing) => {
    if (window.confirm('Are you sure you want to delete?')) {
        try {
            // delete image/images from storage
            Array.from(selectedListing[0].data.imageUrls).forEach(imageUrl => {
                deleteUploadedImageFromDB(imageUrl)
            })

            // delete listing from firebase
            await deleteDoc(doc(db, 'listings', userPostedListingID))

            return true
        } catch (error) {
            //error message
            toast.error('Greška prilikom uklanjanja Vašeg oglasa, molimo Vas probajte ponovo')
            console.log(error);           

            return false
        }
    }
}

export default deleteUserPostedListing