const express = require('express');
const app = express();
const port = 3000;

// Define a GET route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
