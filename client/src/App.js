import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import RootLayout from './components/RootLayout/RootLayout.js'
import NavBar from './components/NavBar/NavBar.js'
import { store, persistor } from './state/store.js'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Fragment>
            <NavBar />
            <RootLayout />
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
