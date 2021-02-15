const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const marketindexSchema = new Schema({
  Date: {
    type: Date,
    required: true,
  },
  Open: {
    type: Number,
    required: true,
  },
  High: {
    type: Number,
    required: true,
  },
  Low: {
    type: Number,
    required: true,
  },
  Close: {
    type: Number,
    required: true,
  },
  //   AdjClose: {
  //     type: Number,
  //     required: true,
  //   },
  Volume: {
    type: Number,
    required: true,
  },
});

const nseIndex = mongoose.model('nse', marketindexSchema);

const bseIndex = mongoose.model('bse', marketindexSchema);

module.exports = { nseIndex, bseIndex };
