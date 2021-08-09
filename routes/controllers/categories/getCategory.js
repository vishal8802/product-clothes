const { Categories } = require('../../../model/Category');

const get = async (req, res) => {
  try {
    const { id: c_id } = req.query;
    const category = await Categories.find(c_id ? { c_id }: {});
    res.json({ data: category, code: 200 });
  } catch (err) {
    console.log(err);
    res.json({ message: 'Some error occured', code: 500 });
  }
};

module.exports = { get };
