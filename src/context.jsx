import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// api
import fetchUserDataFromFirebase from "./api/fetchUserDataFromFirebase";
// firebase/firestore funcs
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./firebase.config";
// custom hook
import usePostedListings from "./hooks/usePostedListings";
import useFetchBlogPageData from "./hooks/useFetchBlogPageData";


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // user details
    const [userData, setUserData] = useState({
        isLoggedIn: false,
        userID: '',
        userName: '',
        userAccountType: '',
        userVerified: false
    })

    useEffect(() => {
        console.log('useEffect - context');        

         onAuthStateChanged(auth, async (user) => {                        
            if (user) {                
                let userProfileData = await fetchUserDataFromFirebase()

                auth.currentUser ? (
                    setUserData({
                        isLoggedIn: true,
                        userID: user.uid,
                        userName: user.displayName,
                        userAccountType: userProfileData.accountType,
                        userVerified: user.emailVerified
                    })
                ) : (
                    setUserData({
                        isLoggedIn: false,
                        userID: '',
                        userName: '',
                        userAccountType: '',
                        userVerified: false
                    })
                )
            }
        })
    }, [])

    // display listings
    const itemsPerListingsPage = 9;
    const { listings, fetchListings, page } = usePostedListings(itemsPerListingsPage);

    // filter option
    const navigate = useNavigate()
    const [condition, setCondition] = useState()
    const [disableOption, setDisableOption] = useState(false)

    const handleSelectedFilterOption = e => {
        setCondition(curState => ({
            ...curState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmittedFilterOptions = e => {
        e.preventDefault()

        if (condition != undefined) {
            setDisableOption(true)

            fetchListings(0, condition)
        }

        if (window.location.pathname != '/oglasi') navigate('/oglasi')
    }

    const handleReset = () => {
        setDisableOption(false)

        setCondition()

        fetchListings()
    }

    // BLOG PAGE   
    const itemsPerBlogPage = 12;
    const { blogPosts, fetchBlogPosts, curBlogPage } = useFetchBlogPageData(itemsPerBlogPage)

    return <AppContext.Provider value={{
        userData, //Profile, HeaderTop, Profile, PostNewListingModal, FormRowDataTwo
        setUserData, // LogOutBtn

        listings, // PostedListings, PostedListingsPagination
        fetchListings, // PostedListings, PostedListingsSearchOption, PostedListingsPagination
        page, // PostedListingsPagination

        condition, // PostedListings, FilterOptions, PostedListingsSearchOption
        setCondition, // PostedListingsSearchOption, DashboardFilterOptions
        disableOption, // PostedListingsFilterOptions, FilterOptions, PostedListingsSearchOption
        setDisableOption, // PostedListingsSearchOption, DashboardFilterOptions

        handleSelectedFilterOption, // FilterOptions
        handleSubmittedFilterOptions, // PostedListingsFilterOptions, DashboardFilterOptions
        handleReset, // PostedListingsFilterOptions, PostedListingsSearchOption

        blogPosts, // Blog
        fetchBlogPosts, // Blog
        curBlogPage // Blog
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)