const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  app.use(express.static('client/build'));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/static/index.html');
  }
  );
}

const PORT = process.env.PORT || 5005;
app.listen(PORT);
