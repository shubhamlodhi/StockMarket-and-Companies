const express = require('express');
const app = express();
const port = 3000;

const session = require('express-session');

const cors = require('cors');

app.use(express.json());
require('./helpers/mongoDB_init');

// White-Listing
const whitelist = [
  'http://localhost:3000',
  'http://localhost:8080',
  // 'https://trello-clone-app-v2.herokuapp.com',
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('** Origin of request ' + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin acceptable');
      callback(null, true);
    } else {
      console.log('Origin rejected');
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

//Routing
const authRoute = require('./routes/auth.route');
const indexRoute = require('./routes/index.route');
app.use('/auth', authRoute);
app.use('/index', indexRoute);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Stock Market app listening at http://localhost:${port}`);
});
