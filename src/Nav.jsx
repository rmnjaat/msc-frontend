import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {  FaBars  } from 'react-icons/fa';
import logo from './assets/logo.jpg'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './Nav.css'

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleClick = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container1">
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h1><FaBars></FaBars></h1>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul onClick={()=>{handleClick()}}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
        
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav

