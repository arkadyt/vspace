const express = require('express')
const dbConnection = require('./db-connection.js')

const app = express()

dbConnection.connectToDB(() => {
  const PORT = 5501
  app.listen(PORT, () => console.log('Express application is live at ' + PORT))
})
