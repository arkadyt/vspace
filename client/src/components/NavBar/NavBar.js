import React from 'react'
import { NavLink, withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutUser } from '../../state/actions/userActions.js'
import './NavBar.scss'

const NavBar = ({
  name,
  logoutUser,
  history
}) => {
  return (
    <div className="NavBar-container">
      <Switch>
        <Route path="/product/:id" render={() => (
          <button 
            className="NavBar-button justify-start"
            onClick={history.goBack}>
            Go Back
          </button>
        )} />
        <Route render={() => (
          <NavLink 
            exact 
            to="/" 
            className="NavBar-navlink justify-start" 
            activeClassName="active">
            Home
          </NavLink>
        )} />
      </Switch>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
