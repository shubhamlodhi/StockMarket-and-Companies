const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const indexRoute = require('./Routes/marketIndex.route');
// const companyRoute = require('./Routes/companyData');
//'mongodb+srv://tote:Yq1nrVODZdhIFJmg@cluster0.hhldg.mongodb.net/market_index?retryWrites=true&w=majority',
// mongoose
//   .connect(
//     'mongodb+srv://tote:Yq1nrVODZdhIFJmg@cluster0.hhldg.mongodb.net/market_index?retryWrites=true&w=majority',
//     {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log('Mongodb Connected .....');
//   });
require('./helpers/init_mongodb');

app.use('/marketIndex', indexRoute);
// app.use('/companyData', companyRoute);

//404 Error Route
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
