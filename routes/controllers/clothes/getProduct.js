const { Clothes } = require('../../../model/Clothes');
const Types = require('mongoose').Types;

const get = async (req, res) => {
  try {
    // await Clothes.deleteMany({c_id: 1});
    const products = await Clothes.find({});
    res.json({ data: products, code: 200 });
  } catch (err) {
    console.log(err);
    res.json({ message: 'Some error occured', code: 500 });
  }
};

module.exports = { get };
