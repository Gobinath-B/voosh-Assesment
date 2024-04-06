const express = require('express');
require('dotenv').config();
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const passport = require('../services/oauthConfig');

// Signup endpoint
router.post("/signup", async (req, res) => {
    const data = req.body;
    const ACCESS_TOKEN_SECRET = "5385f2d1eb9148ecaae9788bf429702dfb62fc8a1f5fd3413d5de419569c4eaab0d2f7f4fc50ea1aea72bd23304e41bfe7a139cbe67146495707d5abf53632b2";
    try {
        const response = await User.create(data);

        const username = req.body.username;
        const user = { username: username };

        const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
        res.cookie('jwt', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        });
        res.json({ accessToken: accessToken, response: response });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//login
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    try {
        // User authentication successful, generate JWT token
        const user = req.user;
        const accessToken = jwt.sign({ username: user.username }, ACCESS_TOKEN_SECRET);
        res.json({ accessToken: accessToken, user: user });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    
    res.redirect('/dashboard');
  });

  

// log out endpoint
router.post('/logout', (req, res) => {
    // Clear the authentication token stored in the client-side cookie
    res.clearCookie('jwt');
    res.json({ message: 'User signed out successfully' });
});

module.exports = router;

