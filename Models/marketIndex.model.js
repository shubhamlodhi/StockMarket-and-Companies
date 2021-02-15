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

const bseIndex = mongoose.model('bse', marketindexSchema);

module.exports = bseIndex;
