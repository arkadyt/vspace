import React from 'react'

import Field from '../../Field/Field'
import './LoginForm.scss'

export default () => {
  return (
    <div className="LoginForm-container">
      <h1>Please login</h1>
      <p>To proceed, please login by entering your name in the box below:</p>
      <Field
        placeholder="eg. Arnold" />
      <Field
        type="button"
        value="Log in" />
    </div>
  )
}
