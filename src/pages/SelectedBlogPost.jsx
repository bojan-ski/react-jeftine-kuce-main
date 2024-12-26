import React from 'react'
import { useLoaderData } from "react-router-dom";
// api func
import fetchSelectedBlogPostFromFirebase from '../api/fetchSelectedBlogPostFromFirebase'
// components
import BackButton from "../components/BackButton";
import SelectedBlogPostContent from "../components/selectedBlogPostPage/SelectedBlogPostContent";


// REACT QUERY
const fetchSelectedBlogPostFromFirebaseQuery = (id) => {
    return {
        queryKey: ['selectedBlogPost', id],
        queryFn: () => fetchSelectedBlogPostFromFirebase(id)
    }
}

// LOADER
export const loader = (queryClient) => async ({ params }) => {
    const selectedBlogPost = await queryClient.ensureQueryData(fetchSelectedBlogPostFromFirebaseQuery(params.id))

    return selectedBlogPost
}

const SelectedBlogPost = () => {
    const selectedBlogPost = useLoaderData()

    return (
        <div className="selected-blog-post-page py-5 px-3">

            <div className="col-12 col-lg-8 mx-auto">
                <BackButton backPath='/blog' />
            </div>


            <div className="row">

                {/* row item 1 */}
                <div className={`col-6 col-lg-2 text-center order-1 ${selectedBlogPost.newBlogPostPromoImgOneUrl && 'mt-5 mb-lg-0'}`}>
                    {selectedBlogPost.newBlogPostPromoImgOneUrl && (
                        <img src={selectedBlogPost.newBlogPostPromoImgOneUrl} alt="promo-img" className="img-fluid rounded-3" style={{ objectFit: 'cover', height: '580px' }} />
                    )}
                </div>

                {/* row item 2 */}
                <div className="col-12 col-lg-8 order-3 order-lg-2">
                    <SelectedBlogPostContent selectedBlogPost={selectedBlogPost} />
                </div>

                {/* row item 3 */}
                <div className={`col-6 col-lg-2 text-center order-2 order-lg-3 ${selectedBlogPost.newBlogPostPromoImgTwoUrl && 'mt-5 mb-lg-0'}`}>
                    {selectedBlogPost.newBlogPostPromoImgTwoUrl && (
                        <img src={selectedBlogPost.newBlogPostPromoImgTwoUrl} alt="promo-img" className="img-fluid rounded-3" style={{ objectFit: 'cover', height: '580px' }} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SelectedBlogPost