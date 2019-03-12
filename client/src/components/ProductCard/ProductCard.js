import React from 'react'

import ContentPad from '../ContentPad/ContentPad'
import "./ProductCard.scss"

const dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const ProductCard = ({
  title,
  image,
  priceStr,
  createdAt
}) => {
  return (
    <ContentPad 
      className="ProductCard-container"
      padding={0}
      borderRadius="4rem 1rem 4rem 1rem">
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

export default ProductCard
