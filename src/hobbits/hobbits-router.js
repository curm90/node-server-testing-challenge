const express = require('express');
const Hobbits = require('./hobbits-model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const hobbits = await Hobbits.find('hobbits');
    res.status(200).json(hobbits);
  } catch (error) {
    res.status(500).json({ message: 'Could not get hobbits ' + error.message });
  }
});

module.exports = router;
