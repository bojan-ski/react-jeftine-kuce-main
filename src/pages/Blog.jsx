import React, { useEffect, useState } from 'react'
// context
import { useGlobalContext } from "../context.jsx";
// components
import PageLocation from "../components/PageLocation.jsx"
import PageHeader from "../components/PageHeader.jsx";
import NoDataAvailableMessage from "../components/NoDataAvailableMessage.jsx";
import BlogPageSearchOption from "../components/blogPage/BlogPageSearchOption.jsx";
import BlogPostsContainer from "../components/blogPage/BlogPostsContainer.jsx";
import Pagination from "../components/Pagination.jsx";


const Blog = () => {
  const { blogPosts, fetchBlogPosts, curBlogPage, isBlogsPageLoading } = useGlobalContext()
  // search feature - state
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch the first page on mount
  useEffect(() => {
    console.log('Blog page - useEffect');

    if (blogPosts.length == 0 && searchTerm == '') {
      console.log('get blog data');

      fetchBlogPosts();
    }
  }, [])

  return (
    <div className="blog-page pb-5">

      <PageLocation />

      <PageHeader title="Blog" />

      <div className="container">

        <BlogPageSearchOption searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchBlogPosts={fetchBlogPosts} />

        {!blogPosts || blogPosts.length == 0 ? (
          <NoDataAvailableMessage text='objavljenih Blog post-ova' />
        ) : (
          <>
            <BlogPostsContainer blogPosts={blogPosts} />

            <Pagination fetchData={fetchBlogPosts} page={curBlogPage} queryParam={searchTerm} isLoading={isBlogsPageLoading} />
          </>
        )}
      </div>
    </div>
  )
}

export default Blog