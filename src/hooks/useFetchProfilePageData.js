import { useState } from "react";
// firebase func
import { collection, query, orderBy, startAfter, limit, getDocs, where } from "firebase/firestore";
import { auth, db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";

const useFetchProfilePageData = (itemsPerPage, listingStatus) => {
    const [listings, setListings] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [page, setPage] = useState(0);

    const fetchListings = async (pageNumber = 0, reset = false) => {
        if (!auth.currentUser) return null

        try {
            let queryParameters = [
                collection(db, `listings`),
                where('userRef', '==', auth.currentUser.uid),
                where('listingStatus', '==', `${listingStatus}`),
                orderBy('timestamp', 'desc'),
                limit(itemsPerPage)
            ]

            let q;

            if (reset || pageNumber === 0) {
                // Fetch the first page or reset to the first page
                q = query(
                    ...queryParameters
                );

                // Reset the last visible document when looping back
                setLastVisible(null);
            } else {
                // Fetch the next set based on the last visible document
                if (lastVisible) {
                    q = query(
                        ...queryParameters,
                        startAfter(lastVisible),
                    );
                }
            }

            const querySnapshot = await getDocs(q);

            // Check if the end of the collection is reached
            if (querySnapshot.docs.length == 0 && pageNumber !== 0) {
                // Loop back to the first page
                fetchListings(0, true);
                return;
            }

            // Update the last visible document for the next page
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            setLastVisible(newLastVisible);

            // Replace the listings with the new set of documents for the current page
            setListings(querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
            setPage(pageNumber);
        } catch (error) {
            //error message
            toast.error('Greška prilikom prikazivanja Vaših oglasa, molimo Vas probajte ponovo')
        }
    };

    return { listings, fetchListings, page };
}

export default useFetchProfilePageData