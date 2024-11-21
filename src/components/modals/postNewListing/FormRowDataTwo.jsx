import React from 'react'
// context
import { useGlobalContext } from '../../../context'
// components
import FormInput from '../../FormInput'


const FormRowDataTwo = ({ formData, handleAddFormData }) => {   
    const { userData } = useGlobalContext()
    const { listingType, propertyType, propertyName, lotNumber, numRooms, numBathrooms, squareFootage, propertyAddress, propertyLocation, propertyDistrict, propertyImages, askingPrice, listingDescription, contactFullName, contactPhoneNumber, contactEmailAddress } = formData

    return (
        <>
            {/* property images */}
            <div className="mb-3">
                <label className='form-label fw-bold'>
                    Slike - do 7 slika, veličine do 1MB
                </label>
                <input
                    className='form-control'
                    type='file'
                    id='propertyImages'
                    onChange={handleAddFormData}
                    accept='.jpg,.png,.jpeg'
                    multiple
                    required
                />
            </div>

            {/* asking price*/}
            <div className="mb-3">
                <label className='form-label fw-bold'>
                    Cena (EUR)
                </label>
                <div className='asking-price-info d-flex align-items-center'>
                    <input
                        className='form-control'
                        type='number'
                        id='askingPrice'
                        value={askingPrice}
                        onChange={handleAddFormData}
                        placeholder="Unesite trazenu cenu/kiriju"
                        required
                    />
                    {listingType === 'izdajem' && <p className='fw-bold ms-2 mb-0'>Mesečno</p>}
                </div>
            </div>

            {/* listing description */}
            <div className="mb-3">
                <label className='form-label fw-bold'>
                    Opis
                </label>
                <textarea className='form-control' id="listingDescription" value={listingDescription} onChange={handleAddFormData} maxLength='350' rows={7} placeholder="Opis vašeg oglasa" required />
            </div>

            {/* contact info*/}
            <div className="my-5">
                <h4 className="fw-bold">
                    Kontakt informacije:
                </h4>

                {/* owner full name */}
                <FormInput
                    label={userData?.userAccountType == 'pravno' ? 'Naziv vaše agencije' : 'Vaše ime i prezime'}
                    // label='Vaše ime i prezime'
                    type='text'
                    name='contactFullName'
                    // value={contactFullName}
                    value={userData?.userAccountType == 'pravno' ? userData?.userName : contactFullName}
                    onMutate={handleAddFormData}
                    maxLength={25}
                    placeholder="Petar Petrović"
                    required={true}
                    disabled={userData?.userAccountType == 'pravno' ? true : false}
                />

                {/* contact phone */}
                <div className="mb-3">
                    <label className='form-label fw-bold'>
                        Telefon
                    </label>
                    <div className="input-group">
                        <span className="input-group-text" id="phone-number">+381</span>
                        <input
                            className='form-control'
                            type='number'
                            id='contactPhoneNumber'
                            aria-describedby="phone-number"
                            value={contactPhoneNumber}
                            onChange={handleAddFormData}
                            placeholder="601112222, 11222333"
                            maxLength={9}
                            required
                        />
                    </div>
                </div>

                {/* contact email */}
                <div>
                    <label className='form-label fw-bold'>
                        Email adresa
                    </label>
                    <input
                        className='form-control'
                        type='email'
                        id='contactEmailAddress'
                        value={contactEmailAddress}
                        onChange={handleAddFormData}
                        maxLength='30'
                        placeholder="email@gmail.com"
                        required
                    />
                </div>
            </div>
        </>
    )
}

export default FormRowDataTwo