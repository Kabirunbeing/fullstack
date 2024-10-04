const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // To parse JSON bodies

// Simple route to test if server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});
app.get('/test', (req, res) => {
  res.send("kabeeri s rubning")
});
// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
