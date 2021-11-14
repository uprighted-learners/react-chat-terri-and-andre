//imports
const mongoose = require('mongoose')

//schema
const Message = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now() }
})

//export to server
module.exports = Message
