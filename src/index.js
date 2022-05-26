import React from 'react';
import ReactDOM from 'react-dom/client';
import Approuter from './routers/Approuter';
import '../src/style/style.scss'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addBlog, removeBlog, editBlog } from './actions/blogs'
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})

//BLOG EKLEME
const blog1 = store.dispatch(addBlog({ title: 'Caesar Deviled Eggs', 
description: 'This is a really fun take on classic deviled eggs, it’s also delightfully simple.Friends coming over? Caesar the day and whip up a batch of these' }));
const blog2 = store.dispatch(addBlog({ title: 'Listen to kwes e’s “crocodile tears”: The Ones', description: '“crocodile tears” by kwes e, a 21-year-old rapper from Canterbury, England has all the elements of a Drain Gang hit: dissociative vocals, fractal drums, and deep-felt melancholy. To impress the object of his affection, kwes e talks about obtaining fancy clothes–a Prada suit is mentioned along with the Lacoste gear that gives the song its winking title. kwes e gives the sad boy warble his own spin, blending the hopeful brags (“I just got some money it’s for me and it’s for only you”) with comic asides (“Were you loving me because I got designer on my crotch?”) in an altered falsetto. By the end of the song, his voice is drowned in static, and everything goes quiet.' }));
const blog3 = store.dispatch(addBlog({ title: 'Blog title 3', description: 'Blog description 3', dateAdded: Date.now() }));
store.dispatch(addBlog({ title: 'Blog title 3', description: 'Blog description 3', dateAdded: Date.now() }));

//BLOG SİLME
//store.dispatch(removeBlog({ id: blog2.blog.id }))


//EDIT BLOG
//store.dispatch(editBlog(blog1.blog.id, { title: "Update Title", description: "update des" }))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <Approuter />
  </Provider>

);
