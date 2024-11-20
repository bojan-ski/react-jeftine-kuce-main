import React from 'react'
// context
import { useGlobalContext } from "../context.jsx"
// components
import PageLocation from "../components/PageLocation.jsx"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn.jsx"
import ProfilePageSelectOptions from '../components/profilePage/ProfilePageSelectOptions.jsx'
import WelcomeMessage from '../components/profilePage/WelcomeMessage.jsx'
import UserActiveListings from '../components/profilePage/UserActiveListings.jsx'
import UserPendingListings from '../components/profilePage/UserPendingListings.jsx'


const Profile = () => {
    const { userData, selectedProfilePageOption, setSelectedProfilePageOption } = useGlobalContext()

    return (
        <div className="profile-page">

            <PageLocation />

            <div className="container">
                {userData.userName && userData.isLoggedIn ? (
                    <>
                        <WelcomeMessage userName={userData.userName} />

                        <ProfilePageSelectOptions selectedProfilePageOption={selectedProfilePageOption} setSelectedProfilePageOption={setSelectedProfilePageOption} />

                        {selectedProfilePageOption == 'pending-listings' && <UserPendingListings />}

                        {selectedProfilePageOption == 'active-listings' && <UserActiveListings />}
                    </>
                ) : (
                    <UserNotLoggedIn />
                )}
            </div>
        </div>
    )
}

export default Profile