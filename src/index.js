const app = require('./app'); // Use require for importing CommonJS modules
require('dotenv').config();
const { createServer } = require('http'); // Assuming you're using Node.js's built-in HTTP module
const PORT = process.env.PORT || 3000; // Use the PORT environment variable if set, otherwise default to 3000

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
