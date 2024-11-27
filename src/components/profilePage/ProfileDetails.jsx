import React from 'react'
// context
import { useGlobalContext } from '../../context'
// components
import DeleteAccount from './DeleteAccount'


const ProfileDetails = () => {
    const { userData } = useGlobalContext()

    return (
        <section className='profile-details bg-white p-4 rounded-4 mb-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p className='mb-1 fw-bold text-muted'>
                        Korisničko ime:<span className='ms-2 text-dark'>{userData?.userName}</span>
                    </p>
                    <p className='mb-1 fw-bold text-muted'>
                        Elektronska pošta:<span className='ms-2 text-dark '>{userData?.userEmail}</span>
                    </p>
                    <p className='mb-1 fw-bold text-muted'>
                        Tip naloga:<span className='ms-2 text-dark capitalize'>{userData?.userAccountType}</span>
                    </p>
                </div>

                <DeleteAccount />
            </div>
        </section>
    )
}

export default ProfileDetails