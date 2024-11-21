const applySelectedFilterOptions = (selectedFilterOptions, allPostedListingsData) => {    
    const { selectedListingType, selectedPropertyType, selectedDistrict } = selectedFilterOptions
    let filteredListOfPostedListings = allPostedListingsData   

    if (selectedListingType !== 'Svi oglasi') {
        const filterResult = filteredListOfPostedListings.filter(listing => {
            return listing.data.listingType == selectedListingType
        })
        filteredListOfPostedListings = filterResult
    }
    if (selectedPropertyType !== 'Svi tipovi imovine') {
        const filterResult = filteredListOfPostedListings.filter(listing => {
            return listing.data.propertyType == selectedPropertyType
        })
        filteredListOfPostedListings = filterResult
    }
    if (selectedDistrict !== 'Svi okruzi') {
        const filterResult = filteredListOfPostedListings.filter(listing => {
            return listing.data.propertyDistrict == selectedDistrict
        })
        filteredListOfPostedListings = filterResult
    }

    return filteredListOfPostedListings
}

export default applySelectedFilterOptions