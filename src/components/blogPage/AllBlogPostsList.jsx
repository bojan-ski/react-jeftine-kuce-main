// component
import BlogPostsCard from "./BlogPostsCard.jsx";


const AllBlogPostsList = ({ displayedBlogPostsList }) => {
    return (
        <div className='row'>
            {(displayedBlogPostsList !== null && displayedBlogPostsList.length > 0) && (
                displayedBlogPostsList?.map(blogPost => {
                    return <BlogPostsCard key={blogPost.id} blogPost={blogPost} />
                })
            )}
        </div>
    )
}

export default AllBlogPostsList