import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import ProductCard from '../../ProductCard/ProductCard'
import Controls from './Controls/Controls'
import { loadProducts } from '../../../state/actions/productActions.js'
import cloneDeep from 'lodash.clonedeep'
import './HomePage.scss'

class HomePage extends Component {
  setNextOrder(opts, field) {
    const option = opts[field]
    
    if (option === 'desc') {
      delete opts[field]
    } else if (option === 'asc') {
      opts[field] = 'desc'
    } else {
      opts[field] = 'asc'
    }

    return opts
  }

  updateSortOrder(field) {
    const { sortOpts, loadProducts } = this.props

    const newOpts = cloneDeep(sortOpts)
    this.setNextOrder(newOpts, field)

    loadProducts(newOpts)
  }

  render() {
    const {
      products,
      loadProducts
    } = this.props
  
    let renderValue

    if (products.length === 0) {
      loadProducts()
      renderValue = (
        <p>Please wait, loading...</p>
      )
    } else {
      const callbacksSorter = [
        undefined,
        this.updateSortOrder.bind(this, 'price'),
        this.updateSortOrder.bind(this, 'created_at'),
        this.updateSortOrder.bind(this, 'title'),
      ]
      const callbacksPaginator = [
        undefined,
      ]

      renderValue = (
        <Fragment>
          <Controls
            callbacksSorter={callbacksSorter} 
            callbacksPaginator={callbacksPaginator} />
          <div className="HomePage-grid">
          {products.map((item, idx) => {
            if (idx > 5)
              return;

            return (
              <ProductCard
                key={item.product_id}
                id={item.product_id}
                title={item.title}
                priceStr={item.price_str}
                image={item.media[0].sizes[3].url}
                createdAt={item.created_at}
                style={{ animationDelay: `${idx * 100}ms` }}
              />
            )
          })}
          </div>
          <Controls
            callbacksSorter={callbacksSorter} 
            callbacksPaginator={callbacksPaginator} />
        </Fragment>
      )
    }

    return (
      <div className="HomePage-container">
          {renderValue}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.data,
  sortOpts: state.products.sortOpts
})

const mapDispatchToProps = {
  loadProducts 
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
