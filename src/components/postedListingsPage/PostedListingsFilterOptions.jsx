import React from 'react'
// context
import { useGlobalContext } from "../../context"
// component
import FilterOptions from "../FilterOptions"


const PostedListingsFilterOptions = () => {
    const { disableOption, handleSubmittedFilterOptions, handleReset } = useGlobalContext()

    return (
        <form onSubmit={handleSubmittedFilterOptions}>
            <div className="row">

                {/* row items 1 to 3 - FilterOptions component */}
                <FilterOptions />

                {/* row item 4 - submit/reset buttons */}
                {!disableOption && (
                    <div className="col-12 col-md-3 mb-3">
                        <button type="submit" className="fw-bold btn bg-orange-hover text-white w-100">
                            Primeni
                        </button>
                    </div>
                )}

                {disableOption && (
                    <div className="col-12 col-md-3 mb-3">
                    <button type="button" className="fw-bold btn btn-warning w-100 text-white" onClick={handleReset}>
                        Reset
                    </button>
                </div>
                )}
            </div>
        </form>
    )
}

export default PostedListingsFilterOptions