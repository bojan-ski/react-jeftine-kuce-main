import React from 'react'
// context
import { useGlobalContext } from "../context.jsx"
// components
import PageLocation from "../components/PageLocation.jsx"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn.jsx"
import WelcomeMessage from '../components/profilePage/WelcomeMessage.jsx'
import ProfileDetails from '../components/profilePage/ProfileDetails.jsx'
import UserListings from '../components/profilePage/UserListings.jsx'


const Profile = () => {
    const { userData, userPendingListings, userActiveListings } = useGlobalContext()

    // console.log(userPendingListings);
    // console.log(userActiveListings);
    

    return (
        <div className="profile-page pb-5">

            <PageLocation />

            <div className="container">
                {userData.userName && userData.isLoggedIn ? (
                    <>
                        <WelcomeMessage userName={userData.userName} />

                        <ProfileDetails />

                        <UserListings />
                    </>
                ) : (
                    <UserNotLoggedIn />
                )}
            </div>
        </div>
    )
}

export default Profile