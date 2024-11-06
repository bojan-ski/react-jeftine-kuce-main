import { useState } from 'react'
// api func
import fetchUserListingsFromFirebase from '../api/fetchUserListingsFromFirebase.js'
// context
import { useGlobalContext } from "../context.jsx"
// components
import PageLocation from "../components/PageLocation.jsx"
import UserNotLoggedIn from "../components/profilePage/UserNotLoggedIn.jsx"
import ProfilePageSelectOptions from '../components/profilePage/ProfilePageSelectOptions.jsx'
import UserPostedListingsContainer from "../components/profilePage/UserPostedListingsContainer.jsx"
import WelcomeMessage from '../components/profilePage/WelcomeMessage.jsx'


// LOADER
export const loader = async () => {
    const allUserPostedListings = await fetchUserListingsFromFirebase()

    return null
    return allUserPostedListings
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

                        <UserPostedListingsContainer />
                    </>
                ) : (
                    <UserNotLoggedIn />
                )}
            </div>
        </div>
    )
}

export default Profile