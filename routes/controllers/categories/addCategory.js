const { Categories } = require('../../../model/Category');

const add = async (req, res) => {
  try {
    const { id:c_id, name } = req.body;
    let category = await Categories.find({ name });
    if (category.length) return res.json({ message: 'Duplicate Entry', code: 409 });
    category = new Categories({c_id, name});
    await category.save();
    return res.json({ message: 'Saved Successfully', code: 200 });
  } catch (err) {
    console.log(err);
    return res.json({ message: 'Some error occured', code: 500 });
  }
};

module.exports = { add };
