import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ContentPad from '../../ContentPad/ContentPad'
import { fetchLoginHistory } from '../../../state/actions/userActions.js'
import './LoginHistoryPage.scss'

const dateFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}

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
      <ContentPad className="LoginHistoryPage-content">
        <h1 className="LoginHistoryPage-header">
          Login history of this website:
        </h1>
        {loginHistory.reverse().map((item, i) => {
          return (
            <p className="LoginHistoryPage-entry" key={`history-${i}`}>
              <span className="LoginHistoryPage-username">
                {item.username ? item.username : '{Someone in a hurry}'}
              </span>
              <span className="LoginHistoryPage-date">
                {new Date(item.date)
                    .toLocaleString('en-US', dateFormatOptions)}
              </span>
            </p>
          )
        })}
      </ContentPad>
    )
  }

  return (
    <div className="LoginHistoryPage-container">
      {renderValue}
    </div>
  )
}

const mapStateToProps = state => ({
  loginHistory: state.users.loginHistory
})

const mapDispatchToProps = {
  fetchLoginHistory
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginHistoryPage))
