// /src/routes/profileRoutes.js

const express = require('express');
const authorizeUser = require('../middlewares/authorizationMiddleware');
const User = require('../models/user');
const profileController = require('../controllers/profileController');
const authenticate = require('../middlewares/authenticationMiddleware');
const upload = require('../middlewares/multerConfig');
const router = express.Router();

// GET user profile by ID
router.get('/:userId', authorizeUser, async (req, res) => {
    try {
        const userId = req.params.userId;
        const userProfile = await User.findById(userId);
        res.json(userProfile);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// View user profile
router.get('/profile', authenticate, profileController.viewProfile);

// Update user profile
router.put('/profile', authenticate, profileController.updateProfile);

// Set profile privacy
router.put('/profile/privacy', authenticate, profileController.setProfilePrivacy);

// Upload profile picture
router.post('/profile/upload', authenticate, upload.single('image'), profileController.uploadProfilePicture);

module.exports = router;


module.exports = router;
