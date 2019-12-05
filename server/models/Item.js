const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  cost: Number
});

module.exports = mongoose.model('Item', itemSchema);