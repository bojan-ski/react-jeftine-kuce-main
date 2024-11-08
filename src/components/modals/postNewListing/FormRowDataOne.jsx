import React from 'react'
// components
import FormInput from '../../FormInput'
// data
import districts from '../../../data/districts'


const FormRowDataOne = ({ formData, handleAddFormData }) => {
    const { listingType, propertyType, propertyName, lotNumber, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, propertyImages, askingPrice, listingDescription, contactFullName, contactPhoneNumber, contactEmailAddress } = formData

    return (
        <>
            {/* listing type */}
            <div className="mb-3">
                <label className="form-label fw-bold">
                    Prodajem / Izdajem
                </label>
                <div className="offer-type-btns">
                    {["prodajem", "izdajem"].map(type => (
                        <button
                            type="button"
                            className={formData.listingType === type ? "select-option-btn-active" : "select-option-btn"}
                            id="listingType"
                            value={type}
                            onClick={handleAddFormData}
                            key={type}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* property type */}
            <div className="mb-3">
                <label className='form-label fw-bold'>
                    Tip nekretnine
                </label>
                <div className="property-type-btns">
                    {["kuća", "stan", "vikendica", "lokal", "plac"].map(type => (
                        <button
                            type="button"
                            className={formData.propertyType === type ? "select-option-btn-active mb-1" : "select-option-btn mb-1"}
                            id="propertyType"
                            value={type}
                            onClick={handleAddFormData}
                            key={type}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* property name */}
            <FormInput
                label='Naziv imovine'
                type='text'
                name='propertyName'
                value={propertyName}
                onMutate={handleAddFormData}
                maxLength={25}
                placeholder="Porodična kuća, jednoiposoban stan ..."
                required={true}
            />

            {propertyType === 'plac' ? (
                <>
                    {/* lot number */}
                    <FormInput
                        label='Broj parcele'
                        type='text'
                        name='lotNumber'
                        value={lotNumber}
                        onMutate={handleAddFormData}
                        maxLength={10}
                        placeholder="112233, 1122/3"
                        required={true}
                    />

                    {/* square footage */}
                    <FormInput
                        label='Prostor (ari)'
                        type='number'
                        name='squareFootage'
                        value={squareFootage}
                        onMutate={handleAddFormData}
                        placeholder="Površina"
                        min={1}
                        max={999}
                        maxLength={3}
                        required={true}
                    />
                </>
            ) : (
                <>
                    {/* number of rooms & bathrooms */}
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <FormInput
                                label='Ukupan broj soba'
                                type='number'
                                name='numRooms'
                                value={numRooms}
                                onMutate={handleAddFormData}
                                placeholder="1, 2, 3 ..."
                                min={1}
                                max={15}
                                maxLength={2}
                                required={true}
                            />
                        </div>

                        <div className="col-12 col-xl-6">
                            <FormInput
                                label='Ukupan broj kupatila'
                                type='number'
                                name='numBathrooms'
                                value={numBathrooms}
                                onMutate={handleAddFormData}
                                placeholder="1, 2 ..."
                                min={1}
                                max={5}
                                maxLength={2}
                                required={true}
                            />
                        </div>
                    </div>

                    {/* square footage */}
                    <FormInput
                        label='Prostor (kvadrata)'
                        type='number'
                        name='squareFootage'
                        value={squareFootage}
                        onMutate={handleAddFormData}
                        placeholder="Površina"
                        min={1}
                        max={999}
                        maxLength={3}
                        required={true}
                    />
                </>
            )}

            {/* property address */}
            <FormInput
                label='Adresa'
                type='text'
                name='propertyAddress'
                value={propertyAddress}
                onMutate={handleAddFormData}
                maxLength={30}
                placeholder="Adresa na kojoj se nalazi imovina"
                required={true}
            />

            {/* property location */}
            <FormInput
                label='Lokacija'
                type='text'
                name='propertyLocation'
                value={propertyLocation}
                onMutate={handleAddFormData}
                maxLength={20}
                placeholder="Naziv grada, sela..."
                required={true}
            />

            {/* property district */}
            <div className="mb-3">
                <label className='form-label fw-bold'>
                    Okrug
                </label>
                <select id="propertyDistrict" className="form-select" onChange={handleAddFormData} >
                    {districts.map((district, idx) => {
                        return <option value={district} key={idx}>
                            {district}
                        </option>
                    })}
                </select>
            </div>
        </>
    )
}

export default FormRowDataOne