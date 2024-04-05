// profileController.js

const profileService = require('../services/profileService');

// View user profile
async function viewProfile(req, res) {
    try {
        const userProfile = await profileService.getUserProfile(req.user._id);
        res.json(userProfile);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Update user profile
async function updateProfile(req, res) {
    try {
        const updatedUserProfile = await profileService.updateUserProfile(req.user._id, req.body);
        res.json(updatedUserProfile);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Set profile privacy
async function setProfilePrivacy(req, res) {
    try {
        const { privacy } = req.body;
        const updatedUserProfile = await profileService.setProfilePrivacy(req.user._id, privacy);
        res.json(updatedUserProfile);
    } catch (error) {
        console.error('Error setting profile privacy:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Upload profile picture
async function uploadProfilePicture(req, res) {
    try {
        // Get the file path of the uploaded image
        const imagePath = req.file.path;

        // Update user profile with the image path
        const updatedUserProfile = await profileService.uploadProfilePicture(req.user._id, imagePath);

        res.json(updatedUserProfile);
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    viewProfile,
    updateProfile,
    setProfilePrivacy
};
