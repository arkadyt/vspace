const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LoginRecordSchema = new Schema({
    username: { type: String },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('posts', LoginRecordSchema)

