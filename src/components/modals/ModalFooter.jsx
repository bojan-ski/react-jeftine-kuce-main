import React from 'react'


const ModalFooter = ({ text, label, target }) => {
    return (
        <div className="modal-footer border-0 justify-content-center">
            <p>
                {text}
            </p>
            <button type="button" className="text-orange-hover btn p-0 m-0" data-bs-toggle="modal" data-bs-target={target}>
                {label}
            </button>
        </div>
    )
}

export default ModalFooter