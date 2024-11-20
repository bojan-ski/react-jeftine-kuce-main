import React from 'react'
// components
import PostedListingsFilterOptions from './PostedListingsFilterOptions'
import PostedListingsSearchOption from './PostedListingsSearchOption'


const PostedListingsConditionOption = ({ conditionOption }) => {
    return (
        <section>
            <div className="row">
                {conditionOption == 'search' ? (
                    <>
                        {/* row item 1 - FILTER component */}
                        < div className="col-12 mb-3">
                            <PostedListingsFilterOptions />
                        </div>
                    </>
                ) : (
                    <>
                        {/* row item 2 - SEARCH component */}
                        <div className="col-12 mb-3">
                            <PostedListingsSearchOption />
                        </div>
                    </>
                )}
            </div>
        </section >
    )
}

export default PostedListingsConditionOption