const { Cart } = require('../../../model/Cart');
const { Clothes } = require('../../../model/Clothes');

const get = async (req, res) => {
  try {
    let cart = await Cart.find({}).lean();
    let total_price = 0,
      discount = 0,
      effective_price = 0,
      delivery = 0;
    cart = await Promise.all(
      cart.map(async (c) => {
        const product = await Clothes.findOne({ _id: c.product_id });
        const delivery_charges = c.quantity * product.delivery_charges;
        const discount_applied = Math.min(100, c.quantity * product.discount);
        const total_product_price =
          product.price * c.quantity + delivery_charges;
        const effective_product_price = total_product_price - discount_applied;

        total_price = total_price + total_product_price;
        discount = discount + discount_applied;
        effective_price = effective_price + effective_product_price;
        delivery = delivery + delivery_charges;
        return {
          ...c,
          effective_product_price,
          discount_applied,
          total_product_price,
          delivery_charges
        };
      })
    );
    res.json({
      data: { cart, effective_price, discount, total_price, delivery },
      code: 200
    });
  } catch (err) {
    console.log(err);
    res.json({ message: 'Some error occured', code: 500 });
  }
};

module.exports = { get };
