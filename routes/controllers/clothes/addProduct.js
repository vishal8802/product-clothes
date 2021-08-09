const { Clothes } = require('../../../model/Clothes');

const add = async (req, res) => {
  try {
    const { name, c_id, price, color, size, quantity, weight } = req.body;

    let clothes = await Clothes.find({ c_id, name, color, size, weight });
    if (clothes.length)
      return res.json({ message: 'Duplicate Entry', code: 409 });

    const delivery_charges = calcDeliveryCharges(weight);
    const discount = calcDiscount(price);

    clothes = new Clothes({
      name,
      c_id,
      price,
      discount,
      color,
      size,
      quantity,
      weight,
      delivery_charges,
      effective_price: price + delivery_charges - discount
    });
    await clothes.save();
    return res.json({ message: 'Saved Successfully', code: 200 });
  } catch (err) {
    console.log(err);
    return res.json({ message: 'Some error occured', code: 500 });
  }
};

const calcDeliveryCharges = (weight = 1) => {
  let pricePerGram = 0.2;
  return pricePerGram * weight;
};

const calcDiscount = (price) => {
  return Math.min(20, price * 0.1);
};

module.exports = { add };
