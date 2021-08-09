const Schema = require('mongoose').Schema;
const model = require('mongoose').model;
const Types = require('mongoose').Types;

const postSchema = new Schema({
  product_id: { type: String, required: true },
  quantity: { type: Number, required: true }

});

const Cart = model('cart', postSchema);

module.exports = { Cart };
