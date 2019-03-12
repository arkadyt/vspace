import React from 'react'
import { withRouter } from 'react-router-dom'

import ContentPad from '../ContentPad/ContentPad'
import "./ProductCard.scss"

const dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const ProductCard = ({
  id,
  title,
  image,
  priceStr,
  createdAt,
  history
}) => {
  return (
    <ContentPad 
      className="ProductCard-container"
      padding={0}
      borderRadius="4rem 1rem 4rem 1rem"
      onClick={() => history.push(`/product/${id}`)}>
      <img className="ProductCard-img" src={image} alt="" />
      <div className="ProductCard-content">
        <h2 className="ProductCard-title">
          {title}
        </h2>
        <p className="ProductCard-price">
          {priceStr}
        </p>
        <p className="ProductCard-date">
          Posted {new Date(createdAt)
              .toLocaleDateString('en-US', dateFormatOptions)}
        </p>
      </div>
    </ContentPad>
  )
}

export default withRouter(ProductCard)
