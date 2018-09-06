const express = require('express');

// init the app
const app = express();

// index route
app.get('/', (req, res) => {
  res.send('Hello from the server');
});

// set the port for heroko or localhost on 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
