const express = require('express');
const app = express();

const message = process.env.APP_MESSAGE || 'Default message';

app.get('/config', (req, res) => {
  res.send({ message });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
