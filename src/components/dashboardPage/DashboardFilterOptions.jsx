import React, { useEffect } from 'react';
// context
import { useGlobalContext } from '../../context.jsx';
// component
import FilterOptions from '../FilterOptions.jsx';
// react icons
import { FaMagnifyingGlass } from 'react-icons/fa6';


const DashboardFilterOptions = () => {
    const { fetchListings, handleSubmittedFilterOptions, setDisableOption, setCondition } = useGlobalContext()

    // Fetch the listings first page on mount & reset setCondition
    useEffect(() => {
        fetchListings();

        setDisableOption(false)
    
        setCondition()
    }, [])

    return (
        <div className="hero-filter">
            <form onSubmit={handleSubmittedFilterOptions}>
                <div className="row">

                    {/* row items 1 to 3 - FilterOptions component */}
                    <FilterOptions />

                    {/* row item 4 - submit button */}
                    <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <button type="submit" className="fw-bold btn bg-orange-hover text-white w-100">
                            Pretražite
                            <FaMagnifyingGlass className='ms-2' />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DashboardFilterOptions