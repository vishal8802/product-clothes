const express = require('express');
const { init } = require('./mongooseConnect');
const PORT = process.env.PORT || 5000;
const route = require('./routes/routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.json({ status: 'Working' }));

app.use('/api', route);


app.listen(PORT, async () => {
  await init();
  console.log('Serving on http://localhost:' + PORT);
});
