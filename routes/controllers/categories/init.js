const { add } = require('./addCategory');
const { update } = require('./updateCategory');
const { get } = require('./getCategory')

module.exports = { category: { add, update, get } };
