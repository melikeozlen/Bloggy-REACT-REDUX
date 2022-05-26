import React from 'react'
import { motion } from "framer-motion"
import "./HomePage.scss"
import bubble from "../../img/bubble.png";
const HomePage = () => {


  return (

    <div id="homePage">

      <motion.h1 className='noselect'
        whileHover={{
          textShadow: "0px 0px 5px #068198",
        }}>BLOGGY</motion.h1>
      <p>"My first full stack project. This project was originally developed to learn redux.
        <br />I learned many new things. The design of the website belongs to me."</p>

      <motion.img src={bubble}
        className="bubble"
        drag dragPropagation
        dragElastic={0.2}
        animate={{
          y: -80,
          scale: 1.05,
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }
        }}
        whileHover={{
          scale: 1.1,
          y: -40,
          rotate: 720,
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }
        }}
        whileTap={{
          rotate: 360,
          transition: {
            duration: 0.5,
          }
        }}
      />
      <motion.img src={bubble}
        drag dragPropagation
        dragElastic={0.2}
        className="bubble_2"
        animate={{
          y: 25,
          transition: {
            delay: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }
        }}
        whileHover={{
          scale: 1.1,
          y: -40,
          rotate: 720,
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }
        }}

      />
    </div >

  )
}

export default HomePage