import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './NavBar.scss'

const NavBar = ({
  name
}) => {
  return (
    <div className="NavBar-container">
      <NavLink to="/" className="NavBar-navlink justify-start" activeClassName="active">
        Home
      </NavLink>
      <span className="NavBar-item">Welcome, {name}</span>
      <NavLink to="/users" className="NavBar-navlink" activeClassName="active">
        View all users
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.users.currentUserName
})

export default connect(mapStateToProps)(NavBar)
