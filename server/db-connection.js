const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

/**
 * Attempts to connect to MongoDB.
 */
function connectToDB(callback) {
  const db = mongoose.connection
  db.on('connecting', () => console.log('Connecting to database...'))
  db.on('open', () => {
    console.log('Connected to database.')
    if (callback) callback()
  })
  db.on('error', err => {
    console.log('Error in database connection:\n\t' + err)
    mongoose.disconnect()
    console.log('Attempting to reconnect in 5 seconds...')
  })
  db.on('disconnected', () => {
    new Promise(resolve => setTimeout(resolve, 5000)).then(() => {
      mongoose.connect(MONGO_URI, { useNewUrlParser: true })
    })
  })
  mongoose.connect(MONGO_URI, { useNewUrlParser: true })
}

module.exports = {
  connectToDB
}
