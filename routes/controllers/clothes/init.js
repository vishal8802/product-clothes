const { add } = require('./addProduct');
const { get } = require('./getProduct');
const { search } = require('./searchProduct');
module.exports = { product: { add, get, search } };
