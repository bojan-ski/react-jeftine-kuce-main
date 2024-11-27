import React from 'react'
// app assets
import appNameImg from '../assets/header-assets/jeftine_kuce_logo_text_whit_small.png'


const SelectedImageModal = ({ imageSrc }) => {
    return (
        <div className="modal fade" id="selectedImageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="selectedImageModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <img src={imageSrc} alt="" className="img-fluid" />
                        <img src={appNameImg} alt="forgotPassword-img" className="modal-img-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedImageModal