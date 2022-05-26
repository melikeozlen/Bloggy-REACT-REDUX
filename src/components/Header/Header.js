import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  const nav_click = () => {
    const Res_nav = document.querySelector("nav");
    if (Res_nav.style.display == "none") {
      Res_nav.style.display = "flex";

    }
    else {
      Res_nav.style.display = "none";
    }

  }
  return (
    <header>
      <NavLink className="navlink" to="/" activeClassName='active' exact>  <h1 className='noselect '>BLOGGY</h1> </NavLink>

      <nav>
        <NavLink className="navlink" to="/" activeClassName='active' exact>Home </NavLink>
        <NavLink className="navlink" to="/blogs" activeClassName='active'>Blogs </NavLink>
        <NavLink className="navlink" to="/create" activeClassName='active'>Create </NavLink>
        <NavLink className="navlink" to="/contact" activeClassName='active'>Contact </NavLink>
      </nav>
      <button onClick={nav_click}><FontAwesomeIcon className="bars" icon={faBars} /></button>
    </header>
  )
}

export default Header;