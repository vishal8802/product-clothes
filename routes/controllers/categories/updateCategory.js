const { Categories } = require('../../../model/Category');

const update = async (req, res) => {
  try {
    const { id: c_id, name } = req.body;

    if (!c_id) res.json({ message: 'Id is required', code: 400 });
    if (!name) res.json({ message: 'Name is required', code: 400 });

    let category = await Categories.find({ c_id });
    if (!category) return res.json({ message: 'Id not found', code: 404 });
    await Categories.updateOne({ c_id }, { name });
    
    return res.json({ message: 'Updated Successfully', code: 200 });
  } catch (err) {
    console.log(err);
    return res.json({ message: 'Some error occured', code: 500 });
  }
};

module.exports = { update };
