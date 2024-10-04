const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB with direct password
const dbPassword = 'strongphp'; // Your MongoDB password
const uri = `mongodb+srv://fullstack:${dbPassword}@fullstack.ysh1o.mongodb.net/?retryWrites=true&w=majority&appName=fullstack`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple route to test if server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/test', (req, res) => {
  res.send("kabeeri is running");
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
