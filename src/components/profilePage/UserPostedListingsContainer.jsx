import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
// firebase/firestore funcs
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
// context
import { useGlobalContext } from "../../context.jsx"
// api func 
import deleteUploadedImageFromDB from "../../api/deleteUploadedImageFromDB.js"
// components
import AllPostedListingsGridView from "../AllPostedListingsGridView.jsx"
import Pagination from "../Pagination.jsx"
// toastify
import { toast } from "react-toastify"


const UserPostedListingsContainer = () => {
    const allUserPostedListings = useLoaderData()

    const { setCurrentPageNumber } = useGlobalContext()

    const [userPostedListings, setUserPostedListings] = useState(allUserPostedListings)  
    const [displayedListingsList, setDisplayedListingsList] = useState({
        totalDataList: null,
        displayedDataList: null
    })

    useEffect(() => {
        setDisplayedListingsList({
            totalDataList: userPostedListings,
            displayedDataList: userPostedListings?.length >= 10 ? userPostedListings.slice(0, 9) : userPostedListings
        })
        setCurrentPageNumber(1)
    }, [userPostedListings])

    const deleteUserPostedListing = async (userPostedListingID) => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                const selectedListing = userPostedListings.filter(listing => listing.id == userPostedListingID)

                // delete image/images from storage
                Array.from(selectedListing[0].data.imageUrls).forEach(imageUrl => {
                    deleteUploadedImageFromDB(imageUrl)
                })

                // delete listing from firebase
                await deleteDoc(doc(db, 'listings', userPostedListingID))

                const updatedListOfUserPostedListings = userPostedListings.filter(listing => listing.id !== userPostedListingID)

                setUserPostedListings(updatedListOfUserPostedListings)

                // success message after listing removal 
                toast.success('Uspešno ste obrisali Vaš oglas');
            } catch (error) {
                //error message
                toast.error('Greška prilikom uklanjanja Vašeg oglasa, molimo Vas probajte ponovo')
            }
        }
    }

    return (
        <>
            <section className="user-posted-listings mb-4">
                {!userPostedListings || userPostedListings.length == 0 ? (
                    <h2 className="fw-bold text-center">
                        Trenutno nemate postavljenih oglasa
                    </h2>
                ) : (
                    <>
                        <h2 className="fw-bold text-center mb-5">
                            Moji oglasi
                        </h2>

                        {/* AllPostedListingsGridView component */}
                        <AllPostedListingsGridView displayedListingsList={displayedListingsList.displayedDataList} deleteUserPostedListing={deleteUserPostedListing} />
                    </>
                )}
            </section>

            {/* Pagination */}
            {(userPostedListings && userPostedListings?.length >= 10) && (
                <Pagination dataLength={userPostedListings} setDisplayedContent={setDisplayedListingsList} />
            )}
        </>
    )
}

export default UserPostedListingsContainer