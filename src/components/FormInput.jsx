import React from 'react'


const FormInput = ({ label, name, type, placeholder, value, defaultValue, required, onMutate, disabled, min, max, maxLength, minLength }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="col-form-label fw-bolder mb-1">
                {label}
            </label>
            <input
                className="form-control"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                onChange={onMutate}
                min={min}
                max={max}
                maxLength={maxLength}
                minLength={minLength}
                required={required}
                disabled={disabled}
            />
        </div>
    )
}

export default FormInput