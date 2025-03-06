const express = require('express');
const app = express();
const config = require('./config');

app.get('/config', (req, res) => {
  res.json(config);
});

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});