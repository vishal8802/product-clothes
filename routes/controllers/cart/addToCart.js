const { Cart } = require('../../../model/Cart');

const add = async (req, res) => {
  try {
    const { quantity, product_id } = req.body;
    let [cart] = await Cart.find({ product_id });
    if(cart) Cart.updateOne({product_id}, {quantity : cart.quantity + quantity})
    else{
      cart = new Cart({quantity, product_id});
      await cart.save();
    }
    return res.json({ message: 'Added Successfully', code: 200 });
  } catch (err) {
    console.log(err);
    return res.json({ message: 'Some error occured', code: 500 });
  }
};

module.exports = { add };
