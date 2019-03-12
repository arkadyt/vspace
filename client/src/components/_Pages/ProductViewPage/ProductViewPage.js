import React from 'react'
import { connect } from 'react-redux'
import ContentPad from '../../ContentPad/ContentPad'
import './ProductViewPage.scss'

const dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const ProductViewPage = ({
  products,
  match: {
    params: {
      productId
    }
  },
  history
}) => {
  if (products.length === 0)
    return history.push('/404')

  const product = products.filter(item => item.product_id === productId)[0]
  const {
    title,
    description,
    media,
    price_str,
    created_at
  } = product

  const date = new Date(created_at)
    .toLocaleString('en-US', dateFormatOptions)

  if (!product) 
    return history.push('/404')

  return (
    <div className="ProductViewPage-container">
      <ContentPad padding={0} className="ProductViewPage-imgviewer">
        <img src={media[0].sizes[0].url} alt="" className="ProductViewPage-imgbg" />
        <img src={media[0].sizes[0].url} alt="" className="ProductViewPage-img" />
      </ContentPad>
      <div className="ProductViewPage-infoblock">
        <h1>{title}</h1>
        <ul className="ProductViewPage-list">
          <li className="ProductViewPage-item">
            <b>Description:</b> {description}
          </li>
          <li className="ProductViewPage-item">
            <b>Price:</b> {price_str}
          </li>
          <li className="ProductViewPage-item">
            <b>Posted:</b> {date}
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductViewPage)
