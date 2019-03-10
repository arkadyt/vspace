import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import Home from '../Home/Home.js'
import ProductView from '../ProductView/ProductView.js'
import "./Root.css"

class Root extends Component {
  render() {
    return (
      <div className="Root-container">
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
})(Root);
