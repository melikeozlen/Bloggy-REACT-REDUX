import React from 'react'
import Header from '../components/Header/Header'
import HomePage from '../components/HomePage/HomePage'
import BlogListPage from '../components/BlogListPage/BlogListPage'
import BlogDetailsPage from '../components/BlogDetails/BlogDetailsPage'
import ContactPage from '../components/Contact/ContactPage'
import NotFoundPage from '../components/Notfound/NotFoundPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddBlogPage from '../components/AddBlogPage/AddBlogPage'
import EditBlogPage from '../components/EditBlog/EditBlogPage'
const Approuter = () => {
    return (

        <BrowserRouter>
            <div className='main'>
                <Header>
                </Header>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/blogs" component={BlogListPage} />
                    <Route exact path="/create" component={AddBlogPage} />
                    <Route exact path="/edit/:id" component={EditBlogPage} />
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                </div>
        </BrowserRouter>
            
                
        
    )
}

export default Approuter