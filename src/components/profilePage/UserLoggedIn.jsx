// context
import { useGlobalContext } from "../../context.jsx"
// modal
import PostNewListingModal from "../../modals/PostNewListingModal.jsx"

const UserLoggedIn = () => {
    const { userData } = useGlobalContext()

    return (
        <>
            <section className="page-heading my-5">
                <div className="mb-4">
                    <h2 className="text-center fw-bold">
                        Dobrodošli
                    </h2>
                    <h2 className="text-center fw-bold">
                        {userData.userName.toUpperCase()}
                    </h2>
                </div>

                <div className="row text-center my-5">
                    
                    {/* row item 1 */}
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <h5 className="text-muted mb-3">
                            Ako zelite da objavite Vaš oglas:
                        </h5>

                        {/* post new listing modal btn */}
                        <button type="button" className="btn bg-orange-hover text-white fw-bold" data-bs-toggle="modal" data-bs-target="#postNewModal">
                            Postavi oglas
                        </button>
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        
                    </div>
                </div>
            </section>

            {/*post new listing modal */}
            <PostNewListingModal />
        </>
    )
}

export default UserLoggedIn