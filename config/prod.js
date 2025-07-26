// prod.js - production keys here!!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  publishableStripeKey: process.env.PUBLISHABLE_STRIPE_KEY,
  secretStripeKey: process.env.SECRET_STRIPE_KEY
};
