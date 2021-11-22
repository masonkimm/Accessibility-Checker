const pally = require('pa11y');
const express = require('express');
const e = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server live on port: ${PORT}`);
});

app.use(express.static('public'));

app.get('/api/test', async (req, res) => {
  const URL = req.query.url;
  if (!URL) {
    res.status(400).json({ error: 'URL required' });
  } else {
    const results = await pally(URL);
    res.status(200).json(results);
  }
});

// const run = async () => {
//   const response = await pally('https://traversy.dev');
//   console.log(response);
// };

// run();
