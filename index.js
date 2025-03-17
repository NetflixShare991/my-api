const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data (in-memory database)
let items = [{ id: 1, name: "Sample Item" }];

// GET endpoint
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST endpoint
app.post('/api/items', (req, res) => {
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});