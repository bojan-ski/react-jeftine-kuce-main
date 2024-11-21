import React from 'react'
import { Link } from 'react-router-dom'
//utils func 
import priceComma from '../utils/priceComma.js'
// React Icons
import { LiaTapeSolid } from 'react-icons/lia'
import { MdConfirmationNumber, MdOutlineBedroomChild } from 'react-icons/md'
import { PiBathtubLight } from 'react-icons/pi'


const PostedListingListViewCard = (postedListing) => {
    const { listingType, propertyType, numRooms, numBathrooms, lotNumber, squareFootage, propertyLocation, imageUrls, askingPrice } = postedListing.data

    return (
        <div className="col-12 list-card p-3 border border-1 rounded-4 d-flex flex-row align-items-center justify-content-around text-start mb-3">
            <div className='list-card-info-1'>
                {listingType === 'izdajem' ? (
                    <h4 className="text-orange fw-bold mb-0 mx-3">
                        IZDAJE SE
                    </h4>
                ) : (
                    <h4 className="text-orange fw-bold mb-0">
                        NA PRODAJU
                    </h4>
                )}
            </div>
            <div className="list-card-info-2 list-card-image d-none d-lg-block">
                <img src={imageUrls[0]} alt="slike-imovine" className="rounded-4" />
            </div>

            <div className="list-card-info-3">
                <h6 className="fw-bold text-orange">
                    {priceComma(askingPrice)} EUR {listingType === 'izdajem' ? 'mes.' : ''}
                </h6>
                <h6 className='capitalize fw-bold'>
                    {propertyType}
                </h6>
                <h6 className='capitalize mb-0'>
                    {propertyLocation}
                </h6>
            </div>
            <div className="list-card-info-4 d-none d-md-block">
                {propertyType === 'plac' ? (
                    <>
                        <p className="mb-0 d-flex align-items-center" >
                            <MdConfirmationNumber className='me-2 text-muted' />
                            Br. parcele:
                        </p>
                        <p className='mb-0'>
                            {lotNumber}
                        </p>
                    </>
                ) : (
                    <>
                        <p className="mb-0 d-flex align-items-center">
                            <MdOutlineBedroomChild className='me-2' />
                            Sobe: {numRooms}
                        </p>
                        <p className="mb-0 d-flex align-items-center">
                            <PiBathtubLight className='me-2' />
                            Kupatila: {numBathrooms}
                        </p>
                    </>
                )}
                <p className="mb-0 d-flex align-items-center">
                    <LiaTapeSolid className='me-2' />
                    Prostor: {squareFootage} {propertyType == 'plac' ? 'ari' : 'kv.'}
                </p>
            </div>

            <Link to={`/oglasi/${postedListing.id}`} className="btn bg-orange-hover text-white fw-bold px-4">
                Detailji
            </Link>
        </div>
    )
}

export default PostedListingListViewCard