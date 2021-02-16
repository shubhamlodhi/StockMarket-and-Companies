const express = require('express');
const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config/key');

// const uri =MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully 👍  ');
});
