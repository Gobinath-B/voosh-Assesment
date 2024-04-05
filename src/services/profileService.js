// profileService.js

const User = require('../models/user');

// Get user profile from the database
async function getUserProfile(userId) {
    const userProfile = await User.findById(userId);
    return userProfile;
}

// Update user profile in the database
async function updateUserProfile(userId, updatedData) {
    const updatedUserProfile = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    return updatedUserProfile;
}

// Set profile privacy in the database
async function setProfilePrivacy(userId, privacy) {
    if (privacy !== 'public' && privacy !== 'private') {
        throw new Error('Invalid privacy setting');
    }

    const updatedUserProfile = await User.findByIdAndUpdate(userId, { 'profile.privacy': privacy }, { new: true });
    return updatedUserProfile;
}


// Upload profile picture
async function uploadProfilePicture(userId, imagePath) {
    // Update user profile with the image path
    const updatedUserProfile = await User.findByIdAndUpdate(userId, { 'profile.photo': imagePath }, { new: true });
    return updatedUserProfile;
}

module.exports = {
    getUserProfile,
    updateUserProfile,
    setProfilePrivacy,
    uploadProfilePicture
};
