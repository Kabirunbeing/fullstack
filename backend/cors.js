const cors = require('cors');

// Allow requests from your frontend URL
const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Define allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers like Content-Type and Authorization
  credentials: true, // If you're dealing with cookies or sessions
};

// Export CORS middleware using the configured options
const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
