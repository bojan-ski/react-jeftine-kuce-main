const UserNotLoggedIn = () => {
    return (
        <div className="text-center py-5">
            <h1 className="fw-bold">
                Trenutno niste prijavljeni
            </h1>
            <h3 className="text-muted mb-5">
                Molimo Vas prijavite se
            </h3>
            
            {/* log in modal btn */}
            <button type="button" className="btn bg-orange-hover text-white fw-bold px-3 py-2" data-bs-toggle="modal" data-bs-target="#logInModal">
                Prijavi se
            </button>
        </div>
    )
}

export default UserNotLoggedIn