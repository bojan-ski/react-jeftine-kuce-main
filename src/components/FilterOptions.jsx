// context
import { useGlobalContext } from "../context"
// data
import districts from "../data/districts"
import propertyTypes from "../data/propertyTypes"


const FilterOptions = () => {
    const { condition, disableOption, handleSelectedFilterOption } = useGlobalContext()

    const propertyTypesList = ['Svi tipovi imovine', ...propertyTypes]
    const districtsList = ['Svi okruzi', ...districts]
    
    const pageURL = window.location.pathname    

    return (
        <>
            {/* row item 1 - display selected offer type */}
            <div className={pageURL == '/' ? "col-12 col-md-6 col-lg-3 mb-3 mb-lg-0" : "col-12 col-md-3 mb-3"}>
                <select className="form-select" value={typeof condition == 'object' && condition.selectedListingType} id="selectedListingType" onChange={handleSelectedFilterOption} disabled={disableOption}>
                    <option value="Svi oglasi">Svi oglasi</option>
                    <option value="prodajem">Na prodaju</option>
                    <option value="izdajem">Izdaje se</option>
                </select>
            </div>

            {/* row item 2 - display selected property type */}
            <div className={pageURL == '/' ? "col-12 col-md-6 col-lg-3 mb-3 mb-lg-0" : "col-12 col-md-3 mb-3"}>
                <select className="form-select" value={typeof condition == 'object' && condition.selectedPropertyType} id="selectedPropertyType" onChange={handleSelectedFilterOption} disabled={disableOption}>
                    {propertyTypesList.map((propertyType, idx) => {
                        return <option key={idx} value={propertyType} className="capitalize">
                            {propertyType}
                        </option>
                    })}
                </select>
            </div>

            {/* row item 3 - display selected district */}
            <div className={pageURL == '/' ? "col-12 col-md-6 col-lg-3 mb-3 mb-lg-0" : "col-12 col-md-3 mb-3"}>
                <select className="form-select" value={typeof condition == 'object' && condition.selectedDistrict} id="selectedDistrict" onChange={handleSelectedFilterOption} disabled={disableOption}>
                    {districtsList.map((district, idx) => {
                        return <option key={idx} value={district} className="capitalize">
                            {district}
                        </option>
                    })}
                </select>
            </div>
        </>
    )
}

export default FilterOptions