const mongoose = require('mongoose');
// const URL = `mongodb+srv://new-task:<admin>@cluster0.ykqky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const URL = `mongodb://localhost:27017/clothes`;
const init = async () => {
  mongoose.connect(URL, {
    useNewUrlParser: 'true'
  });
  mongoose.connection.on('error', (err) => {
    console.log('err', err);
  });
  mongoose.connection.on('connected', (err, res) => {
    console.log('mongoose is connected');
  });
};

module.exports = { init };
