import React from 'react'
// context
import { useGlobalContext } from '../../context'
// components
import ProfilePageSelectOptions from './ProfilePageSelectOptions'
import UserPendingListings from './UserPendingListings'
import UserActiveListings from './UserActiveListings'


const UserListings = () => {
    const { selectedProfilePageOption } = useGlobalContext()

    return (
        <section className='user-listings bg-white p-4 rounded-4'>
            <ProfilePageSelectOptions />

            {selectedProfilePageOption == 'pending-listings' && <UserPendingListings />}

            {selectedProfilePageOption == 'active-listings' && <UserActiveListings />}
        </section>
    )
}

export default UserListings