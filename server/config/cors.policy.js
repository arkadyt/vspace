const cors = require('cors')

let whitelist

if (process.env.NODE_ENV === 'development') {
  whitelist = ['http://localhost:5777']
} else {
  whitelist = ['https://vspace.arkadyt.com']
}

console.log('CORS whitelist:', whitelist)

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = cors(corsOptions)
