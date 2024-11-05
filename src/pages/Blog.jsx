import { useEffect, useState } from "react";
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
  const { blogPosts, fetchBlogPosts, curBlogPage } = useGlobalContext()
  // search feature - state
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch the first page on mount
  useEffect(() => {
    console.log('Blog page - useEffect');

    if (blogPosts.length == 0 && searchTerm == '') {
      console.log('get data');

      fetchBlogPosts();
    }
  }, [])

  return (
    <div className="blog-page">

      <PageLocation />

      <PageHeader title="Blog" />

      <div className="container">

        <BlogPageSearchOption searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchBlogPosts={fetchBlogPosts} />

        {!blogPosts || blogPosts.length == 0 ? (
          <NoDataAvailableMessage text='Blog post-ova' />
        ) : (
          <>
            <BlogPostsContainer blogPosts={blogPosts} />

            <Pagination fetchData={fetchBlogPosts} page={curBlogPage} queryParam={searchTerm} />
          </>
        )}
      </div>
    </div>
  )
}

export default Blog