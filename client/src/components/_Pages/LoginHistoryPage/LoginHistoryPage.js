import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ContentPad from '../../ContentPad/ContentPad'
import { fetchLoginHistory } from '../../../state/actions/userActions.js'
import './LoginHistoryPage.scss'

const LoginHistoryPage = ({
  loginHistory,
  fetchLoginHistory
}) => {
  let renderValue;

  if (!loginHistory || loginHistory.length === 0) {
    fetchLoginHistory()
    renderValue = (
      <p>Please wait, loading...</p>
    )
  } else {
    renderValue = (
      <Fragment>
        <h2>Login history of this website:</h2>
        {loginHistory.map((item, i) => {
          return (
            <p className="LoginHistoryPage-entry">
              <span className="LoginHistoryPage-username">
                {item.username}
              </span>
              <span className="LoginHistoryPage-date">
                {item.date}
              </span>
            </p>
          )
        })}
      </Fragment>
    )
  }

  return (
    <ContentPad className="LoginHistoryPage-container">
      {renderValue}
    </ContentPad>
  )
}

const mapStateToProps = state => ({
  loginHistory: state.users.loginHistory
})

const mapDispatchToProps = {
  fetchLoginHistory
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginHistoryPage))
