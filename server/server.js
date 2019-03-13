global.__basedir = __dirname;

const express = require('express')
const { jsonServer, jsonServerRewriter } = require('./api/product.js')
const userRouter = require('./api/user.js')
const bodyParser = require('body-parser')
const dbConnection = require('./db-connection.js')
const cors = require('./config/cors.policy.js')

const app = express()
app.use(cors)
app.use(jsonServerRewriter)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', userRouter)
app.use(jsonServer)

dbConnection.connectToDB(() => {
  const PORT = process.env.PORT || 5501
  app.listen(PORT, () => console.log('Express app is live at ' + PORT))
})
