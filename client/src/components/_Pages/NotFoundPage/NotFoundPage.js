import React from 'react'
import ContentPad from '../../ContentPad/ContentPad'
import { Link } from 'react-router-dom'
import './NotFoundPage.scss'

const NotFoundPage = () => {
  return (
    <ContentPad className="NotFoundPage-container">
      <p className="NotFoundPage-icon">
        404
      </p>
      <h2>Wow, such empty!</h2>
      <Link to='/' className="NotFoundPage-link">
        Return back to safety!
      </Link>
    </ContentPad>
  )
}

export default NotFoundPage

