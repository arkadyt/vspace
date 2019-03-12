import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Field from '../../Field/Field'
import './LoginForm.scss'
import { loginUser } from '../../../state/actions/userActions.js'

class LoginForm extends Component {
  state = {
    name: ''
  }

  handleSubmit(e) {
    e.preventDefault()

    const { history, loginUser } = this.props
    loginUser(this.state.name, () => history.push('/'))
  }

  render() {
    return (
      <form 
        className="LoginForm-container" 
        onSubmit={this.handleSubmit.bind(this)}>
        <h1>Please login</h1>
        <p>To proceed, please login by entering your name in the box below:</p>
        <Field
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="eg. Arnold" />
        <Field
          type="submit"
          value="Log in" />
      </form>
    )    
  }
}

export default withRouter(connect(null, { loginUser })(LoginForm))
