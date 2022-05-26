import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/card.jpg"
import img1 from "../../img/card1.jpg"
import img2 from "../../img/card2.jpg"
import img4 from "../../img/card4.jpg"
import img5 from "../../img/card5.jpg"
import img6 from "../../img/card6.jpg"
import img7 from "../../img/card7.jpg"
import "./BlogList.scss"

const BlogListItem = ({ id, title }) => {
    let imgs = [img, img, img1, img2, img2, img4, img5, img6, img7, img7];
    let rnd = Math.floor(Math.random() * 10) ;
    return (

        <div className='blogListItem'>
            <h2>{title}</h2>
            <img src={imgs[rnd]} className="noselect" />
            <div className='links'>
                <Link className="link" to={`/blogs/${id}`}>DETAILS </Link>
                <Link className="link" to={`/edit/${id}`}>EDIT </Link>
            </div>

        </div>

    )
}

export default BlogListItem