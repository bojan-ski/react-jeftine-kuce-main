import { useState } from 'react'
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
                    </>
                ) : (
                    <UserNotLoggedIn />
                )}
            </div>
        </div>
    )
}

export default Profile