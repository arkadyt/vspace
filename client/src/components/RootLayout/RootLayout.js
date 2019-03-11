import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../_Pages/HomePage/HomePage'
import ProductViewPage from '../_Pages/ProductViewPage/ProductViewPage'
import NotFoundPage from '../_Pages/NotFoundPage/NotFoundPage'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import LoginForm from '../_Forms/LoginForm/LoginForm'
import "./RootLayout.scss"

class RootLayout extends Component {
  render() {
    return (
      <div className="RootLayout-container">
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/product/:productId" component={ProductViewPage} />
          <Route path="/login" component={LoginForm} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default RootLayout
