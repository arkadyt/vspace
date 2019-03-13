const express = require('express')
const router = express.Router()
const LoginRecord = require('../models/LoginRecord.js')

router.get('/test', (req, res) => res.send('OK'))

router.get('/', (req, res) => {
  LoginRecord
    .find()
    .then(data => {
      if (!data || data.length === 0) {
        res.status(404).json({ error: 'No user login records in database.' })
      } else {
        res.json(data)
      }
    })
    .catch(err => res.status(400).json(err))
})

router.post('/', (req, res) => {
  new LoginRecord(req.body)
    .save()
    .then(data => {
      res.json(data)
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router
