import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// api
import fetchUserDataFromFirebase from "./api/fetchUserDataFromFirebase";
// firebase/firestore funcs
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./firebase.config";
// custom hook
import useFetchAllActiveListings from "./hooks/useFetchAllActiveListings";
import useFetchSelectedAgencyListings from "./hooks/useFetchSelectedAgencyListings";
import useFetchBlogPageData from "./hooks/useFetchBlogPageData";
import useFetchProfilePageData from "./hooks/useFetchProfilePageData";


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // USER PROFILE DETAILS
    const [userData, setUserData] = useState({
        isLoggedIn: false,
        userID: '',
        userName: '',
        userEmail: '',
        userAccountType: '',
        userVerified: false
    })

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                let userProfileData = await fetchUserDataFromFirebase()               

                auth.currentUser ? (
                    setUserData({
                        isLoggedIn: true,
                        userID: user.uid,
                        userName: user.displayName,
                        userEmail: user.email,
                        userAccountType: userProfileData?.accountType,
                        userVerified: user.emailVerified
                    })
                ) : (
                    setUserData({
                        isLoggedIn: false,
                        userID: '',
                        userName: '',
                        userEmail: '',
                        userAccountType: '',
                        userVerified: false
                    })
                )
            }
        })
    }, [])

    // POSTED LISTINGS & DASHBOARD PAGES
    const itemsPerListingsPage = 3;
    const { listings, fetchListings, page: curListingsPage, isLoading: isListingsPageLoading } = useFetchAllActiveListings(itemsPerListingsPage);

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

    // AGENCIES PAGE
    const [selectedAgencyData, setSelectedAgencyData] = useState({})

    const itemsSelectedAgencyPage = 3;
    const { listings: allSelectedAgencyListings, fetchListings: fetchAllSelectedAgencyListings, page: curSelectedAgencyPage, isLoading: isAllSelectedAgencyListingsLoading } = useFetchSelectedAgencyListings(itemsSelectedAgencyPage);

    // PROFILE PAGE
    const [selectedProfilePageOption, setSelectedProfilePageOption] = useState('pending-listings')

    const itemsPendingListings = 3;
    const { listings: userPendingListings, fetchListings: fetchUserPendingListings, page: curPendingListingsPage, isLoading: isPendingListingsLoading } = useFetchProfilePageData(itemsPendingListings, 'pending');

    const itemsActiveListings = 3;
    const { listings: userActiveListings, fetchListings: fetchUserActiveListings, page: curActiveListingsPage, isLoading: isActiveListingsLoading } = useFetchProfilePageData(itemsActiveListings, 'active');

    // BLOG PAGE   
    const itemsPerBlogPage = 3;
    const { blogPosts, fetchBlogPosts, curBlogPage, isLoading: isBlogsPageLoading } = useFetchBlogPageData(itemsPerBlogPage)

    return <AppContext.Provider value={{
        userData, //Profile, HeaderTop, Profile, ProfileDetails, PostNewListingModal, FormRowDataTwo, PostedListingGridViewCard
        setUserData, // LogOutBtn

        // POSTED LISTINGS & DASHBOARD PAGE
        listings, // PostedListings, PostedListingsPagination
        fetchListings, // DashboardFilterOptions, PostedListings, PostedListingsSearchOption, PostedListingsPagination
        curListingsPage, // PostedListingsPagination
        isListingsPageLoading, // PostedListings

        condition, // PostedListings, FilterOptions, PostedListingsSearchOption
        setCondition, // PostedListingsSearchOption, DashboardFilterOptions
        disableOption, // PostedListingsFilterOptions, FilterOptions, PostedListingsSearchOption
        setDisableOption, // PostedListingsSearchOption, DashboardFilterOptions

        handleSelectedFilterOption, // FilterOptions
        handleSubmittedFilterOptions, // PostedListingsFilterOptions, DashboardFilterOptions
        handleReset, // PostedListingsFilterOptions, PostedListingsSearchOption

        // AGENCIES PAGE
        selectedAgencyData, // AgenciesContainer, SelectAgencyOptions, SelectedAgencyProfileData, SelectedAgencyListings
        setSelectedAgencyData, // AgenciesContainer, SelectAgencyOptions
        allSelectedAgencyListings, // AgenciesContainer, SelectedAgencyListings
        fetchAllSelectedAgencyListings, // AgenciesContainer, SelectAgencyOptions, SelectedAgencyListings
        curSelectedAgencyPage, // SelectedAgencyListings
        isAllSelectedAgencyListingsLoading, // SelectedAgencyListings

        //PROFILE PAGE
        selectedProfilePageOption, // UserListings, DeleteListing, ProfilePageSelectOptions
        setSelectedProfilePageOption, // ProfilePageSelectOptions

        userPendingListings, // Profile, UserPendingListings
        fetchUserPendingListings, // Profile, UserPendingListings, DeleteListing
        curPendingListingsPage, // UserPendingListings
        isPendingListingsLoading, // UserPendingListings

        userActiveListings, // Profile, UserActiveListings
        fetchUserActiveListings, // Profile, UserActiveListings, DeleteListing
        curActiveListingsPage, // UserActiveListings,
        isActiveListingsLoading, // UserActiveListings

        //BLOG PAGE
        blogPosts, // Blog
        fetchBlogPosts, // Blog
        curBlogPage, // Blog
        isBlogsPageLoading, // Blog
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)