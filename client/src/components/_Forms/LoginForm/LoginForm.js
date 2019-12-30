import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Field from '../../Field/Field'
import ContentPad from '../../ContentPad/ContentPad'
import { loginUser } from '../../../state/actions/userActions.js'
import './LoginForm.scss'

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
      <ContentPad className="LoginForm-container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>Please login</h1>
          <p>Sum of 2 + 2 = ?</p>
          <Field
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="eg. 5" />
          <Field
            type="submit"
            value="Log in" />
        </form>
      </ContentPad>
    )    
  }
}

export default withRouter(connect(null, { loginUser })(LoginForm))
