import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <NavLink to="/" className="NavBar-navlink justify-start" activeClassName="active">
        Home
      </NavLink>
      <span className="NavBar-item">Welcome, %userName%</span>
      <NavLink to="/users" className="NavBar-navlink" activeClassName="active">
        View all users
      </NavLink>
    </div>
  )
}

export default NavBar

