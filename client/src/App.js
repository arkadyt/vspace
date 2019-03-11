import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import RootLayout from './components/RootLayout/RootLayout.js'
import NavBar from './components/NavBar/NavBar.js'
import store from './state/store.js'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <RootLayout />
          <NavBar />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
