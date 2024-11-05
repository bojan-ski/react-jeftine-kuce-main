import React from 'react'
// component
import BlogPostsCard from './BlogPostsCard.jsx'


const BlogPostsContainer = ({ blogPosts }) => {
    return (
        <section className='blog-posts-list mb-3'>
            <div className="row">
                {blogPosts.map(blogPost => <BlogPostsCard key={blogPost.newBlogPostTitle} blogPost={blogPost} />)}
            </div>
        </section>
    )
}

export default BlogPostsContainer