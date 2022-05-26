import React from 'react'
import BlogList from './BlogList'
import "./BlogList.scss"
const BlogListPage = () => {
  return (
    <>
      <h4>Blog List</h4>
      <div className="blogListPage" >
        <BlogList className="blogListP" />
      </div>
    </>
  )
}

export default BlogListPage