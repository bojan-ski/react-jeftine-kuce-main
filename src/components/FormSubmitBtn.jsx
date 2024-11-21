import React from 'react'


const FormSubmitBtn = ({ isLoading, label }) => {
    return (
        <button type="submit" className="btn bg-orange-hover fw-bolder text-white mt-2 py-3 w-100 rounded-4" disabled={isLoading}>
            {label}
        </button>
    )
}

export default FormSubmitBtn