const express = require('express');
const path = require('path');

const app = express();
const PORT = 5501;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
