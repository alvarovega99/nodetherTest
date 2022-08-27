const { Schema, model } = require('mongoose')
const users = new Schema({
  email: String,
  password: String,
  postings: [{
    type: Array,
    default: []
    }]
}
)
module.exports = model('users', users)