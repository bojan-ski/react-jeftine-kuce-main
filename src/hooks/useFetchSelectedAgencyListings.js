import { useState, useCallback } from "react";
// firebase func
import { collection, query, orderBy, startAfter, limit, getDocs, where } from "firebase/firestore";
import { db } from "../firebase.config";
// toastify
import { toast } from "react-toastify";


const useFetchSelectedAgencyListings = (itemsPerPage) => {
    const [listings, setListings] = useState([]);
    const [pageSnapshots, setPageSnapshots] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [currentAgencyID, setCurrentAgencyID] = useState(null);

    const fetchListings = useCallback(async (pageNumber = 0, agencyID, reset = false) => {
        console.log('fetchListings - useFetchSelectedAgencyListings');

        setIsLoading(true);

        // console.log(agencyID);
        // console.log(currentAgencyID);

        // Local copy of snapshots to handle reset
        let updatedSnapshots = pageSnapshots;

        // Reset snapshots and state if the agencyID changes
        if (currentAgencyID !== agencyID) {
            setCurrentAgencyID(agencyID);
            updatedSnapshots = [];
            setPageSnapshots([]);
            setPage(0);
            pageNumber = 0; // Force fetch for the first page
            reset = true;
        }

        try {
            let baseQuery = [
                collection(db, 'listings'),
                orderBy('timestamp', 'desc'),
                limit(itemsPerPage),
                where('userRef', '==', `${agencyID}`),
                where('listingStatus', '==', 'active')
            ]

            let q;

            if (reset || pageNumber === 0) {
                // Fetch the first page or reset to the first page
                q = query(
                    ...baseQuery,
                );

                updatedSnapshots = [];
                // setPageSnapshots([]);
            } else if (pageNumber > page) {
                // Moving forward, use the last snapshot of the current page              
                // let lastVisible = pageSnapshots[pageSnapshots.length - 1];
                let lastVisible = updatedSnapshots[updatedSnapshots.length - 1];

                q = query(...baseQuery, startAfter(lastVisible));
            } else if (pageNumber < page) {
                // Moving back, use the snapshot of the previous page
                // let previousPageSnapshot = pageSnapshots[pageNumber - 1];
                let previousPageSnapshot = updatedSnapshots[pageNumber - 1];

                q = query(...baseQuery, startAfter(previousPageSnapshot));
            }

            const querySnapshot = await getDocs(q);

            // Check if the end of the collection is reached
            if (querySnapshot.docs.length == 0 && pageNumber !== 0) {
                // Loop back to the first page
                updatedSnapshots = [];
                setPageSnapshots([]);

                fetchListings(0, agencyID, true);
                return;
            }

            // Update the last visible document for the next page
            const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            // setPageSnapshots([...pageSnapshots, newLastVisible]);            
            updatedSnapshots = reset
                ? [newLastVisible]
                : [...updatedSnapshots, newLastVisible];
            setPageSnapshots(updatedSnapshots);

            // if (querySnapshot.docs.length > 0) {
            //     const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
            //     setPageSnapshots((prevSnapshots) =>
            //         reset ? [newLastVisible] : [...prevSnapshots, newLastVisible]
            //     );
            // }

            // Replace the listings with the new set of documents for the current page
            setListings(querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
            setPage(pageNumber);
        } catch (error) {
            //error message
            toast.error('Greška prilikom prikazivanja svi objavljenih oglasa izabrane agencije')

            console.log(error);
        }

        // console.log(listings);
        console.log(pageSnapshots);
        // console.log(page);        

        setIsLoading(false);
    }, [page, itemsPerPage, pageSnapshots, currentAgencyID])

    return { listings, fetchListings, page, isLoading };
}

export default useFetchSelectedAgencyListings