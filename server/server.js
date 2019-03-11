const express = require('express')
const { jsonServer, jsonServerRewriter } = require('./api/product.js')
const dbConnection = require('./db-connection.js')

const app = express()
app.use(jsonServerRewriter)
app.use(jsonServer)

dbConnection.connectToDB(() => {
  const PORT = process.env.PORT || 5501
  app.listen(PORT, () => console.log('Express app is live at ' + PORT))
})
