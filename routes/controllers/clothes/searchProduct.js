const { Clothes } = require('../../../model/Clothes');

const search = async (req, res) => {
  try {
    const { color, quantity, size } = req.query;

    const where = {};
    color && (where.color = color);
    size && (where.size = size);
    quantity && (where.quantity = { $lte: +quantity, $gte: 0 })
    console.log(where)
    const products = await Clothes.aggregate([
      { $match: where }
    ]);
    res.json({ data: products, code: 200 });
  } catch (err) {
    console.log(err);
    res.json({ message: 'Some error occured', code: 500 });
  }
};

module.exports = { search };
