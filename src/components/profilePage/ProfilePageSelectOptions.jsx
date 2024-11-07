// modals
import PostNewListingModal from "../../modals/PostNewListingModal"


const ProfilePageSelectOptions = ({ selectedProfilePageOption, setSelectedProfilePageOption }) => {
    return (
        <>
            <section className="profile-page-options border-bottom pb-4 mb-5">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <button className={`select-option-btn ${selectedProfilePageOption == 'pending-listings' && 'select-option-btn-active'}`} onClick={() => setSelectedProfilePageOption('pending-listings')}>
                            Oglasi na čekanju
                        </button>

                        <button className={`select-option-btn ${selectedProfilePageOption == 'active-listings' && 'select-option-btn-active'}`} onClick={() => setSelectedProfilePageOption('active-listings')}>
                            Aktivni oglasi
                        </button>

                        {/* <button className={`btn border px-3 select-option-btn ${selectedProfilePageOption == 'post-listing' && 'select-option-btn-active'}`} onClick={() => setSelectedProfilePageOption('post-listing')}>
                        Omiljeni oglasi
                        </button> */}
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-md-6 mb-3 mb-md-0 text-md-end">
                        {/* post new listing modal btn */}
                        <button type="button" className="btn bg-orange-hover text-white fw-bold" data-bs-toggle="modal" data-bs-target="#postNewModal">
                            Postavi oglas
                        </button>
                    </div>
                </div>
            </section>

            {/*post new listing modal */}
            <PostNewListingModal />
        </>
    )
}

export default ProfilePageSelectOptions