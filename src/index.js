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
const blog1 = store.dispatch(addBlog({ title: 'Backend Developer', 
description: 'Backend developers build code that allows a database and an application to communicate with one another. Backend developers take care and maintain the back-end of a website, Including databases, servers, and apps, and they control what you dont see' }));
const blog2 = store.dispatch(addBlog({ title: 'Redux - TOOLKIT', description: `The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

"Configuring a Redux store is too complicated"
"I have to add a lot of packages to get Redux to do anything useful"
"R
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
