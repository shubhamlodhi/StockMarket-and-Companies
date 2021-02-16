const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());
const {
  bseIndex,
  nseIndex,
  ashokleyIndex,
  ciplaIndex,
  eichermotIndex,
  relianceIndex,
  tatasteelIndex,
} = require('../models/index.model');

const index = {
  bse: bseIndex,
  nse: nseIndex,
  ashokley: ashokleyIndex,
  cipla: ciplaIndex,
  eichermot: eichermotIndex,
  reliance: relianceIndex,
  tatasteel: tatasteelIndex,
};

router.get('/:name', async (req, res, next) => {
  const indexData = await index[req.params.name].find({});
  res.send(indexData);
});

module.exports = router;
