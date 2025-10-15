const express = require('express');

const app = express();
const PORT = 8001;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory storage for tasks (matching Python server's initial data)
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Root endpoint - returns "Hello World" (matching Python server)
app.get('/', (req, res) => {
  res.send('Hello World');
});

// GET /tasks - Returns list of tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// POST /tasks - Adds a new task
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
