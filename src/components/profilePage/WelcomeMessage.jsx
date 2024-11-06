import React from 'react'

const WelcomeMessage = ({ userName }) => {
    return (
        <section className="page-heading my-5">
            <h2 className="text-center fw-bold">
                Dobrodošli
            </h2>
            <h2 className="text-center fw-bold">
                {userName.toUpperCase()}
            </h2>
        </section>
    )
}

export default WelcomeMessage