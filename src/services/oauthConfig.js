const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');



const GOOGLE_CLIENT_ID = "132156653775-c3p4nsqhhgtnpgfjljhg3it557nlm3dn.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async function(accessToken, refreshToken, profile, done) {
    try {
      // Check if user already exists in the database
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // Create a new user if not found
        user = await User.create({ googleId: profile.id, email: profile.emails[0].value });
      }

      // Return the user
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));



module.exports = passport;
