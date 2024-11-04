import React from 'react'

const ModalHeader = ({ label }) => {
    return (
        <div className="modal-header border-0">
            <h2 className="modal-title fw-bolder">
                {label}
            </h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
    )
}

export default ModalHeader