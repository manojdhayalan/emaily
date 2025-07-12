const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const session = require('cookie-session');
const keys = require("./config/keys");
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();


app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [keys.cookieKey]
}));

passport.initialize();
passport.session();

authRoutes(app);
const PORT = process.env.PORT || 5005;
app.listen(PORT);