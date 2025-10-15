/**
 * Node.js Express Server - Migrated from Python FastAPI
 * 
 * This server was migrated from Python FastAPI to Node.js Express
 * using GitHub Copilot assistance.
 * 
 * Framework: Express.js
 * Language: Node.js
 * Port: 8001
 * 
 * Original Python Implementation: python-server/src/main.py
 */

const express = require('express');

const app = express();
const PORT = 8001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for logging requests (added for better debugging)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// In-memory storage for tasks (matching Python server's initial data)
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

/**
 * Root endpoint - returns "Hello World"
 * Migrated from Python FastAPI @app.get("/")
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

/**
 * GET /tasks - Returns list of all tasks
 * Migrated from Python FastAPI @app.get("/tasks")
 * Returns: { tasks: string[] }
 */
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

/**
 * POST /tasks - Adds a new task to the list
 * Migrated from Python FastAPI @app.post("/tasks")
 * Request body: { text: string }
 * Returns: { message: string }
 */
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Migration from Python FastAPI complete!`);
});
