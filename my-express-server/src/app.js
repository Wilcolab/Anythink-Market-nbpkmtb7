const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8001;

// Route to test Python API
app.get('/tasks', async (req, res) => {
  try {
    const response = await axios.get('http://python-server:8000/tasks');
    res.json(response.data);
  } catch (error) {
    console.error('Error connecting to Python server:', error.message);
    res.status(500).json({ error: 'Failed to fetch from Python server' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
