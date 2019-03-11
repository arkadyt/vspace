import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import Home from '../Home/Home.js'
import ProductView from '../ProductView/ProductView.js'
import "./RootLayout.css"

class RootLayout extends Component {
  render() {
    return (
      <div className="RootLayout-container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/product/:productId" component={ProductView} />
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
