const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const postSchema = new Schema({
  name: {type: String, required: true},
  c_id: {type: Number, required: true},
});

const Categories = model('Categories', postSchema);

module.exports = { Categories };
