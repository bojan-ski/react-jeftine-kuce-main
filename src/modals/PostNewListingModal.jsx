import { useState } from "react";
// api funcs
import storeUploadedImage from '../api/storeUploadedImage.js'
import publishNewListing from "../api/publishNewListing.js";
// context
import { useGlobalContext } from "../context.jsx";
// components
import Loading from '../components/Loading.jsx'
import FormRowDataOne from "../components/modals/postNewListing/FormRowDataOne.jsx";
import FormRowDataTwo from "../components/modals/postNewListing/FormRowDataTwo.jsx";
// toastify
import { toast } from "react-toastify";


const PostNewListingModal = () => {   
    const { userData } = useGlobalContext()    
    const { userID, userName, userAccountType, userVerified } = userData
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        userRef: userID,
        userUsername: userName,
        userAccountType: userAccountType,
        listingStatus: 'pending',
        listingType: 'prodajem',
        propertyType: 'kuća',
        propertyName: '',
        lotNumber: '',
        numRooms: '',
        numBathrooms: '',
        squareFootage: '',
        propertyAddress: '',
        propertyLocation: '',
        propertyDistrict: 'Beograd',
        propertyImages: [],
        askingPrice: '',
        listingDescription: '',
        contactFullName: '',
        contactPhoneNumber: '',
        contactEmailAddress: '',
    })

    const handleAddFormData = (e) => {
        const { id, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: files ? files : value,
        }));
    };

    // console.log(formData);

    const validateImages = (images) => {
        if (images.length > 7) {
            toast.warning('Ograničenje je 7 slika, molimo Vas pobajte ponovo!');
            return false;
        }
        if (!Array.from(images).every(img => img.size <= 1000000)) {
            toast.warning('Ograničenje za otpremanje slike je do 1MB, molimo Vas pobajte ponovo!');
            return false;
        }
        return true;
    };

    const handleCreateNewListingSubmit = async (e) => {
        e.preventDefault();

        // setIsLoading(true);

        // if (!userVerified) {
        //     toast.error('Vaš nalog nije verifikovan. Molimo Vas proverite Vašu elektronsku poštu radi verifikacije Vašeg naloga');

        //     setIsLoading(false);
        //     return;
        // }

        if (!validateImages(formData.propertyImages)) return setIsLoading(false);

        try {
            const imageUrls = await Promise.all(
                Array.from(formData.propertyImages).map(image =>
                    storeUploadedImage(image, userName, formData.contactEmailAddress)
                )
            );

            await publishNewListing(formData, imageUrls)
        } catch (error) {
            toast.error('Greška prilikom otpremanja slika, molimo Vas probajte ponovo');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <Loading />

    return (
        <div className="modal fade" id="postNewModal" tabIndex="-1" aria-labelledby="postNewModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">

                    {/* modal-header */}
                    <div className="modal-header border-0">
                        <div className="text-center w-100">
                            <h2 className="modal-title fw-bolder">
                                Postavi novi oglas
                            </h2>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    {/* modal-body */}
                    <div className="modal-body">
                        <form className="p-4 rounded-5" onSubmit={handleCreateNewListingSubmit}>
                            <div className="row">

                                {/* row item 1 */}
                                <div className="col-12 col-lg-6">
                                    <FormRowDataOne formData={formData} handleAddFormData={handleAddFormData} />
                                </div>

                                {/* row item 2 */}
                                <div className="col-12 col-lg-6">
                                    <FormRowDataTwo formData={formData} handleAddFormData={handleAddFormData} />
                                </div>
                            </div>

                            {/* submit btn */}
                            <div className="submit-button text-center">
                                <button type='submit' className='px-5 py-3 fw-bold text-white btn bg-orange-hover' disabled={isLoading}>
                                    Objavi Oglas
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNewListingModal