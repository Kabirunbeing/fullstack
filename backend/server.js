const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const userRoutes = require('./routes/userRoutes'); // Import user routes
// const cors = require('./cors'); // Import your custom CORS configuration
// const morgan = require('morgan'); // Import morgan for logging

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());
// app.use(cors); // Use your custom CORS configuration

// Use morgan for logging
// app.use(morgan('dev')); // Log requests to the console

// Use the post, comment, and user routes
app.use('/api/posts', postRoutes);   // Use post routes for '/api/posts'
app.use('/api/comments', commentRoutes);   // Use comment routes for '/api/comments'
app.use('/api/users', userRoutes);   // Use user routes for '/api/users'

// Define a test route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
