import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const privateRoute = ({ 
  component: Component, 
  isAuthenticated,
  ...rest 
}) => {
  return (
    <Route {...rest} render={props => 
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to='/login' />
    } />
  )
}

const mapStateToProps = state => ({
    isAuthenticated: state.users.isAuthenticated
})

export default withRouter(connect(mapStateToProps)(privateRoute))
