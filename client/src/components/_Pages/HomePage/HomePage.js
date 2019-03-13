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
      opts[field] = undefined
    } else if (option === 'asc') {
      opts[field] = 'desc'
    } else {
      opts[field] = 'asc'
    }

    return opts
  }

  updateSortOrder(field) {
    const { 
      sortOpts,
      loadProducts
    } = this.props

    const newOpts = cloneDeep(sortOpts)
    this.setNextOrder(newOpts, field)

    loadProducts({ sortOpts: newOpts })
  }

  getButtonBackground(sortOrder) {
    const dict = {
      'asc': `rgba(0, 0, 0, .10)`,
      'desc': `rgba(255, 255, 255, .10)`
    }
    return dict[sortOrder]
  }

  render() {
    const {
      products,
      sortOpts,
      loadProducts,
      totalCount,
      pageIdx
    } = this.props

    let renderValue

    if (!products || products.length === 0) {
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
      const backgroundsSorter = [
        undefined,
        this.getButtonBackground(sortOpts['price']),
        this.getButtonBackground(sortOpts['created_at']),
        this.getButtonBackground(sortOpts['title'])
      ]
      const countTextPaginator = `${pageIdx}/${Math.ceil(totalCount/6)}`
      const callbacksPaginator = [
        () => {
          const newIdx = pageIdx - 1
          if (newIdx > 0) {
            loadProducts({ pageIdx: newIdx })
          }
        },
        undefined,
        () => {
          const newIdx = pageIdx + 1
          if (newIdx < Math.ceil(totalCount/6) + 1) {
            loadProducts({ pageIdx: newIdx })
          }
        },
      ]

      renderValue = (
        <Fragment>
          <Controls
            callbacksSorter={callbacksSorter}
            backgroundsSorter={backgroundsSorter}
            countTextPaginator={countTextPaginator}
            callbacksPaginator={callbacksPaginator} />
          <div className="HomePage-grid">
          {products.map((item, idx) => {
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
            backgroundsSorter={backgroundsSorter}
            countTextPaginator={countTextPaginator}
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
  sortOpts: state.products.sortOpts,
  totalCount: state.products.totalCount,
  pageIdx: state.products.pageIdx
})

const mapDispatchToProps = {
  loadProducts 
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
