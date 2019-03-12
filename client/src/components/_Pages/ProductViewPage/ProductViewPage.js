import React from 'react'
import { connect } from 'react-redux'
import ImageViewer from '../../ImageViewer/ImageViewer'
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
    created_at,
    seller: {
      first_name,
      last_name,
      country
    },
    category_data,
    tags,
    distance_str
  } = product

  const date = new Date(created_at)
    .toLocaleString('en-US', dateFormatOptions)

  if (!product) 
    return history.push('/404')

  window.scrollTo(0, 0)

  return (
    <div className="ProductViewPage-container">
      <ImageViewer 
        className="ProductViewPage-imgviewer"
        media={media} />
      <div className="ProductViewPage-infoblock">
        <h1>{title}</h1>
        <ul className="ProductViewPage-list">
          {description
            ? (
              <li className="ProductViewPage-item">
                <b>Description:</b> {description}
              </li>
            ) : null}
          <li className="ProductViewPage-item">
            <b>Price:</b> {price_str}
          </li>
          <li className="ProductViewPage-item">
            <b>Posted:</b> {date}
          </li>
          <li className="ProductViewPage-item">
            <b>Seller:</b> {first_name} {last_name}. ({country})
          </li>
          {category_data.length > 0
            ? (
                <li>
                  <b>Category info:&nbsp;</b>
                  <ul className="ProductViewPage-list">
                    {category_data.map((item, idx) => {
                      return (
                        <li className="ProductViewPage-item" key={`li-${idx}`}>
                          <b>{item.display_str_key}:</b> {item.display_str}
                        </li>
                      )
                    })}
                  </ul>
                </li>
            ) : null}
          {tags.length > 0
            ? (
                <li>
                  <b>Tags:&nbsp;</b>
                    {tags.map((item, idx) => {
                      const prefix = ", "
                      return (
                        <span key={`li-${idx}`}>
                          {idx > 0 ? prefix : null}
                          {item.display_str}
                        </span>
                      )
                    })}
                </li>
            ) : null}
          {distance_str
            ? (
              <li className="ProductViewPage-item">
                <b>Distance:</b> {distance_str}
              </li>
            ) : null}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductViewPage)
