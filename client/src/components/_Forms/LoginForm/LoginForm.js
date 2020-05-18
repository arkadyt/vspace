import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { useMobileDetector } from '../../../hooks'
import Field from '../../Field/Field'
import ContentPad from '../../ContentPad/ContentPad'
import { loginUser } from '../../../state/actions/userActions.js'
import './LoginForm.scss'

const LoginForm = props => {
  const [ name, setName ] = useState('')
  const isMobile = useMobileDetector();
  const msgClasses = ['LoginForm-warning--message'].join(' ');

  const handleSubmit = e => {
    e.preventDefault()
    const { history, loginUser } = props
    loginUser(name, () => history.push('/'))
  }

  return (
    <div className="LoginForm-container">
      <div className="LoginForm-backdrop" />
      <ContentPad className="LoginForm-pad">
        {isMobile ? (
          <div className="LoginForm-warning--container">
            <span className="LoginForm-warning--headline">vSpace</span>
            <p className={msgClasses}>
                Support for vertical layouts has not been
                implemented yet!
            </p>
            <p className={msgClasses}>
                If you would like to contribute, please open
                a Pull Request at github.com/arkadyt/vspace!
            </p>
            <p className={msgClasses}>
                In the meanwhile you can try visiting this
                page from a laptop or desktop computer!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>Please login</h1>
            <p>To proceed, please enter your name:</p>
            <Field
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="eg. Andrew" />
            <Field
              type="submit"
              value="Log in" />
          </form>
        )}
      </ContentPad>
    </div>
  )    
}

export default withRouter(connect(null, { loginUser })(LoginForm))
