import React from 'react'
import './Field.scss'

const Field = ({
  type,
  value,
  onChange,
  placeholder
}) => {
  const className = "Field-widget";

  switch(type) {
    case 'button':
    case 'submit':
      return (
        <input
          type="button"
          value={value} 
          onChange={onChange}
          className={className}
          placeholder={placeholder} />
      )
    default:
      return (
        <input
          type="text"
          value={value} 
          onChange={onChange}
          className={className}
          placeholder={placeholder} />
      )
  }
}

export default Field
