import { useState } from 'react'
// api func
import fetchUserListingsFromFirebase from '../api/fetchUserListingsFromFirebase.js'
import fetchUserDataFromFirebase from '../api/fetchUserDataFromFirebase.js'
// context
import { useGlobalContext } from "../context.jsx"
// components
import PageLocation from "../components/PageLocation.jsx"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn.jsx"
import ProfilePageSelectOptions from '../components/profilePage/ProfilePageSelectOptions.jsx'
import WelcomeMessage from '../components/profilePage/WelcomeMessage.jsx'
import UserActiveListings from '../components/profilePage/UserActiveListings.jsx'
import UserPendingListings from '../components/profilePage/UserPendingListings.jsx'


// LOADER
export const loader = async () => {
    const userPendingPostedListings = await fetchUserListingsFromFirebase('pendingListings')
    const userActivePostedListings = await fetchUserListingsFromFirebase('listings')
    const userProfileData = await fetchUserDataFromFirebase()

    return { userPendingPostedListings, userActivePostedListings, userProfileData }
}

const Profile = () => {
    const { userData } = useGlobalContext()
    const [selectedProfilePageOption, setSelectedProfilePageOption] = useState('pending-listings')

    return (
        <div className="profile-page">

            <PageLocation />

            <div className="container">
                {userData.userName && userData.isLoggedIn ? (
                    <>
                        <WelcomeMessage userName={userData.userName} />

                        <ProfilePageSelectOptions selectedProfilePageOption={selectedProfilePageOption} setSelectedProfilePageOption={setSelectedProfilePageOption} />

                        {selectedProfilePageOption == 'pending-listings' && <UserPendingListings />}

                        {selectedProfilePageOption == 'listing' && <UserActiveListings />}

                        {/* <UserPostedListingsContainer /> */}
                    </>
                ) : (
                    <UserNotLoggedIn />
                )}
            </div>
        </div>
    )
}

export default Profile