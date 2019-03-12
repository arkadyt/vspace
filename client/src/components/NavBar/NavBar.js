import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutUser } from '../../state/actions/userActions.js'
import './NavBar.scss'

const NavBar = ({
  name,
  logoutUser
}) => {
  return (
    <div className="NavBar-container">
      <NavLink exact to="/" className="NavBar-navlink justify-start" activeClassName="active">
        Home
      </NavLink>
      <span className="NavBar-item">Welcome, {name}!</span>
      <button className="NavBar-button" onClick={() => logoutUser()}>
        Log out
      </button>
      <NavLink to="/users" className="NavBar-navlink" activeClassName="active">
        View all users
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.users.currentUserName
})

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
