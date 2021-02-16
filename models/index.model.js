const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const marketindexSchema = new Schema({
  Date: {
    type: String,
    required: false,
  },
  Open: {
    type: Number,
    required: false,
  },
  High: {
    type: Number,
    required: false,
  },
  Low: {
    type: Number,
    required: false,
  },
  Close: {
    type: Number,
    required: false,
  },
  AdjClose: {
    type: Number,
    required: false,
  },
  Volume: {
    type: Number,
    required: false,
  },
});

// const nseIndex = mongoose.model('nse', marketindexSchema);

const bseIndex = mongoose.model('bseindexes', marketindexSchema);
const nseIndex = mongoose.model('nseindexes', marketindexSchema);
const ashokleyIndex = mongoose.model('ashokleyindexes', marketindexSchema);
const ciplaIndex = mongoose.model('ciplaindexes', marketindexSchema);
const eichermotIndex = mongoose.model('eichermotindexes', marketindexSchema);
const relianceIndex = mongoose.model('relianceindexes', marketindexSchema);
const tatasteelIndex = mongoose.model('tatasteelindexes', marketindexSchema);

module.exports = {
  bseIndex,
  nseIndex,
  ashokleyIndex,
  ciplaIndex,
  eichermotIndex,
  relianceIndex,
  tatasteelIndex,
};
