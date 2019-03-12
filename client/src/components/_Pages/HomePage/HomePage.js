import React from 'react'
import { connect } from 'react-redux'
import {
  FaAngleRight as IconRight,
  FaAngleLeft as IconLeft
} from 'react-icons/fa'

import ProductCard from '../../ProductCard/ProductCard'
import Controls from './Controls/Controls'
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
    })
  }

  return (
    <div className="HomePage-container">
      <Controls />
      <div className="HomePage-grid">
        {renderValue}
      </div>
      <Controls />
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
