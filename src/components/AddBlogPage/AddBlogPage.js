import React from 'react'
import BlogForm from '../BlogForm/BlogForm'
import {connect} from 'react-redux'
import {addBlog} from "../../actions/blogs"
const AddBlogPage = (props) => {
  return (
    <div>
        <h4>ADD BLOG</h4>
        <BlogForm onSubmit={(blog)=>{
            props.dispatch(addBlog(blog));
            props.history.push("/blogs");
        }}/>
    </div>
  )
}

export default connect() (AddBlogPage)