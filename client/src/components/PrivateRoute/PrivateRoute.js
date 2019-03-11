import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function privateRoute({ 
  component: Component, 
  authedUser: { 
    isAuthenticated 
  }, 
  ...rest 
}) {
  return (
    <Route {...rest} render={props => 
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to='/login' />
    } />
  )
}

export const mapStateToProps = state => ({
    authedUser: state.users
})

export default withRouter(connect(mapStateToProps)(privateRoute))
