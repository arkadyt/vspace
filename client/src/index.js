import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = "http://localhost:5501"
} else {
  axios.defaults.baseURL = "https://api.arkadyt.com/hp"
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
