import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import HomePage from '../_Pages/HomePage/HomePage.js'
import ProductViewPage from '../_Pages/ProductViewPage/ProductViewPage.js'
import "./RootLayout.css"

class RootLayout extends Component {
  render() {
    return (
      <div className="RootLayout-container">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/product/:productId" component={ProductViewPage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect({
  mapStateToProps
})(RootLayout)