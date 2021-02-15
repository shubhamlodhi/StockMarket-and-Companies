/**
 * Here are two things for fetching and for storing data from/to data database respectively.
 */

const express = require('express');
const router = express.Router();

const bse = require('../Models/marketindex.model');

router.get('/bse', async (req, res, next) => {
  try {
    const bseData = await bse.find();

    res.send(bseData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
