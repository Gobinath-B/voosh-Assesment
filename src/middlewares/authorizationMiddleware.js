// /src/middlewares/authorizationMiddleware.js

const User = require('../models/user');

async function authorizeUser(req, res, next) {
    try {
        // Get the ID of the requested user profile
        const userId = req.params.userId; 

        // Find the user profile in the database
        const userProfile = await User.findById(userId);

        if (!userProfile) {
            return res.status(404).json({ error: 'User profile not found' });
        }

        // Check if the requesting user is an admin
        if (req.user.role === 'admin') {
            
            return next();
        }

        
        if (userProfile.isPublic) {
            // Normal users can access public profiles
            return next();
        } else {
            // If the profile is private, check if the requesting user is the owner of the profile
            if (userProfile._id.equals(req.user._id)) {
                // User is the owner of the profile, allow access
                return next();
            } else {
                // User is not authorized to access private profile
                return res.status(403).json({ error: 'Access forbidden' });
            }
        }
    } catch (error) {
        console.error('Authorization error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = authorizeUser;
