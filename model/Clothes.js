const Schema = require('mongoose').Schema;
const model = require('mongoose').model;
const Types = require('mongoose').Types;

const postSchema = new Schema({
  name: { type: String, required: true },
  c_id: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, max: 20 },
  color: { type: String, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  weight: { type: Number },
  delivery_charges: { type: Number, required: true },
  effective_price: { type: Number, required: true }
});

const Clothes = model('clothes', postSchema);

module.exports = { Clothes };
