import { Link } from "react-router-dom";


const BlogPostsCard = ({ blogPost }) => {
    const { id, data } = blogPost
    const {blogTitle, blogContent, blogCreated} = data

    return (
        <div className="col-12 col-lg-4 p-3">
            <div className="blog-post-card bg-white rounded-4 p-4">
                <div className="blog-post-card-main border-bottom pb-3 mb-3">
                    <h3 className="text-center">
                        {blogTitle}
                    </h3>
                    <p className="mb-0 fw-bold">
                        {blogContent.slice(0, 250)} ...
                    </p>
                </div>

                <div className="blog-post-card-footer d-flex align-items-center justify-content-between">
                    <Link to={`/blog/${id}`} className="btn bg-orange-hover text-white fw-bold py-2 px-3">
                        Pročitaj više
                    </Link>
                    <p className="fw-bold mb-0">
                        {blogCreated}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPostsCard