import { useLoaderData, Link } from "react-router-dom";
// api func
import fetchSelectedBlogPostFromFirebase from '../api/fetchSelectedBlogPostFromFirebase'


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
    const { blogTitle, blogContent, blogCreated } = selectedBlogPost

    return (
        <div className="selected-blog-post-page py-5">
            <div className="container py-3 px-5 rounded-4 bg-white">

                <div className="blog-post-details">
                    <section className="d-flex align-items-center justify-content-between mt-5 mb-4">
                        <Link to='/blog' className="btn bg-orange-hover text-white fw-bold px-4">
                            Nazad
                        </Link>
                        <p className="fw-bold mb-0">
                            <span className="text-muted me-2">Blog objavljen:</span>
                            {blogCreated}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-center mb-4">
                            {blogTitle}
                        </h2>
                        <p className="fw-bold">
                            {blogContent}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SelectedBlogPost