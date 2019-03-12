import React from 'react'

import ContentPad from '../ContentPad/ContentPad'
import "./ProductCard.scss"

const ProductCard = ({
  title,
  image,
  priceStr,
  createdAt
}) => {
  return (
    <ContentPad className="ProductCard-container">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <span className="ProductCard-span-price">
        {priceStr}
      </span>
      <span className="ProductCard-span-date">
        {createdAt}
      </span>
    </ContentPad>
  )
}

export default ProductCard
