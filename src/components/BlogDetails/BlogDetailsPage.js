import React from 'react'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'
import "./BlogDetails.scss"

const BlogDetailsPage = (props) => {
  return (
    <>
    <h4>BLOG DETAILS</h4>
      <div className='BlogDetailsPage'>

        <BlogDetailsItem {...props.blog} />
      </div>

    </>
  )
}
const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === props.match.params.id
    })
  }
}
export default connect(mapStateToProps)(BlogDetailsPage)