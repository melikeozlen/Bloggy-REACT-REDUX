import { v4 as uuid } from 'uuid';
import { createStore, combineReducers } from 'redux';

//SATATE BELİRLEDİK
// const state = {
//   blogs: [
//     {
//       id: 1,
//       title: 'blog title 1',
//       description: 'blog description 1',
//       dateAdded: 0
//     },
//   ],
//   auth: {
//     userid: 1,
//     username: 'melikeozlen',
//     email: 'info@sadikturan.com'
//   }
// }


//ACTION CREATER 
const addBlog = ({ title = ' ', description = ' ', dateAdded = 0 }) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    title: title,
    description: description,
    dateAdded: dateAdded
  }

})


const removeBlog = ({ id }) => (
  {
    type: "REMOVE_BLOG",
    id: id
  }
)

const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates
})

//1. REDUCER OLUŞTURUYORUZ
const blogState = []
const blogReducer = (state = blogState, action) => { //SATATE BOŞ BİR DİZİ TUTUYOR
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        action.blog
      ]
    case "REMOVE_BLOG":
      return state.filter(({ id }) => {
        return id !== action.id;
      })
    case "EDIT_BLOG":
      return state.map((blog)=>{
        if(blog.id === action.id) {
            
            return{
              ...blog,
              ...action.updates
            }
        } else{return blog;}
store.dispatch(removeBlog({id: blog1.blog.id}))
})

    default:
      return state;
  }
}
//2. REDUCER
const autState = {};
const autReducer = (state = autState, action) => {
  switch (action.type) {

    default:
      return state
  }
}
//İKİ REDUCER'I STOREDA BİRLEŞTİRDİK
const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: autReducer
  })

);

store.subscribe(() => {
  console.log(store.getState());
})

//BLOG EKLEME
const blog1 = store.dispatch(addBlog({ title: 'Blog title 1', description: 'Blog description 1' }));
const blog2 = store.dispatch(addBlog({ title: 'Blog title 2', description: 'Blog description 2' }));
const blog3 = store.dispatch(addBlog({ title: 'Blog title 3', description: 'Blog description 3', dateAdded: Date.now() }));

//BLOG SİLME
store.dispatch(removeBlog({ id: blog2.blog.id }))


//EDIT BLOG
store.dispatch(editBlog(blog1.blog.id, { title: "update title", description: "update des" }))
