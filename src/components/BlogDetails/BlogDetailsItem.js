import React from 'react'
import "./BlogDetails.scss"
const BlogDetailsItem = ({id, title, description}) => {
  return (
    <div className='BlogDetailsItem'>
    <h1>{title}</h1>
    
    <p> {description}</p>
    </div>
  )
}
//<h4>BLOG id: {id}</h4>
export default BlogDetailsItem