const express = require('express');
const helmet = require('helmet');

const app = express();

const hobbitsRouter = require('../src/hobbits/hobbits-router');

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

app.use('/api/hobbits', hobbitsRouter);

module.exports = app;
