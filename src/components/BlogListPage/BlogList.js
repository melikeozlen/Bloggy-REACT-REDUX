import React from 'react'
import {connect} from 'react-redux'
import BlogListItem from "./BlogListItem"
import "./BlogList.scss"

const BlogList = (props) => {
    console.log(props);
  
  return (
    <>
        <div className="blogList" >
            {props.blogs.map(blog=>{
                return <BlogListItem key={blog.id} {...blog}/>
            })}
        </div>
    </>
  )
}
const mapStateToProps=(state) => {
    return {
        blogs:state.blogs  //storedan alış-veriş yaptık gibi
    }
}

//HIGHER ORDER COMPONENT (HOC)
export default connect(mapStateToProps)(BlogList);