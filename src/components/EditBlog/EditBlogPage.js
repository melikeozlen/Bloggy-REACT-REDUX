import React from 'react'
import BlogForm from '../BlogForm/BlogForm'
import { connect } from 'react-redux'
import { editBlog, removeBlog } from '../../actions/blogs'
import "./EditBlog.scss"
const EditBlogPage = (props) => {
    return (
        <>
            <h4>EditBlogPage</h4>
            <div className='editblogpage'>

                <BlogForm
                    blog={props.blog}
                    onSubmit={(blog) => {
                        props.dispatch(editBlog(props.blog.id, blog));
                        props.history.push('/blogs');
                    }} />
                <button onClick={() => {
                    props.dispatch(removeBlog({ id: props.blog.id }));
                    props.history.push('/blogs');
                }}>DELETE</button>
            </div>
        </>
    )
}

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find((b) => {
            return b.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(EditBlogPage)