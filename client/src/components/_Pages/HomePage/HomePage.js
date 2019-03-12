import React from 'react'
import { connect } from 'react-redux'

import ProductCard from '../../ProductCard/ProductCard'
import { loadProducts } from '../../../state/actions/productActions.js'
import './HomePage.scss'

const HomePage = ({
  products,
  loadProducts
}) => {
  let renderValue

  if (products.length === 0) {
    console.log('fetch products')
    loadProducts()
    renderValue = (
      <p>Please wait, loading...</p>
    )
  } else {
    renderValue = products.map((item, idx) => {
      return (
        <ProductCard
          key={item.product_id}
          id={item.product_id}
          title={item.title}
          priceStr={item.price_str}
          image={item.media[0].sizes[0].url}
          createdAt={item.created_at}
          style={{ animationDelay: `${idx * 100}ms` }}
        />
      )
    })
  }

  return (
    <div className="HomePage-container">
      {renderValue}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = {
  loadProducts 
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
