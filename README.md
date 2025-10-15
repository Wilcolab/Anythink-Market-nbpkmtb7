# Anythink Market - Dual Server Architecture

This project demonstrates a dual-server architecture with both **Python FastAPI** and **Node.js Express** servers running together. The Node.js server was migrated from the Python implementation using **GitHub Copilot** assistance.

## 🚀 Server Overview

### Node.js Express Server (Port 8001) - Primary
- **Framework**: Express.js
- **Language**: Node.js
- **Status**: ✅ Active - Migrated from Python
- **Location**: `my-express-server/`

### Python FastAPI Server (Port 8000) - Reference
- **Framework**: FastAPI
- **Language**: Python 3.9
- **Status**: Running alongside Node.js
- **Location**: `python-server/`

## 📁 Project Structure

### Node.js Server
- `my-express-server/src/app.js`: Express.js server implementation with all migrated endpoints
- `my-express-server/package.json`: Node.js dependencies and scripts
- `my-express-server/Dockerfile`: Docker configuration for Node.js server
- `my-express-server/README.md`: Node.js server-specific documentation

### Python Server (Original Implementation)
- `python-server/src/main.py`: Original FastAPI server implementation
- `python-server/src/__init__.py`: Python package marker
- `python-server/requirements.txt`: Python dependencies
- `python-server/Dockerfile`: Docker configuration for Python server

### Configuration & Documentation
- `docker-compose.yml`: Multi-container orchestration for both servers
- `COPILOT_MIGRATION_GUIDE.md`: Detailed guide on using GitHub Copilot for migration
- `TESTING_REPORT.md`: Comprehensive testing documentation

## 🏃 Getting Started

### Run Both Servers with Docker

Build and start both servers using Docker Compose:

```bash
docker compose up --build
```

This command will:
1. Build Docker images for both Python and Node.js servers
2. Start both containers with hot-reload enabled
3. Expose ports 8000 (Python) and 8001 (Node.js)

### Access the Servers

- **Node.js Express Server**: http://localhost:8001
- **Python FastAPI Server**: http://localhost:8000

### Development Mode

Both servers run with hot-reload enabled:
- **Node.js**: Uses `nodemon` (via `yarn start`)
- **Python**: Uses `uvicorn --reload`

Any code changes will automatically restart the respective server.

## 📡 API Routes

Both servers implement identical API endpoints:

### GET /
Returns a simple "Hello World" message.

**Example:**
```bash
curl http://localhost:8001/
# Response: Hello World
```

### GET /tasks
Retrieves the complete list of tasks.

**Example:**
```bash
curl http://localhost:8001/tasks
# Response: {"tasks": ["Write a diary entry from the future", ...]}
```

### POST /tasks
Adds a new task to the list.

**Request Body:**
```json
{
  "text": "Your new task description"
}
```

**Example:**
```bash
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text":"Build a time machine"}'
# Response: {"message": "Task added successfully"}
```

## 🤖 GitHub Copilot Migration

This project demonstrates best practices for using **GitHub Copilot** to migrate code between frameworks:

### Migration Process
1. ✅ Provided clear context (Framework: Express.js, Language: Node.js)
2. ✅ Used Copilot Chat to translate Python FastAPI to Node.js Express
3. ✅ Maintained API contract compatibility
4. ✅ Added comprehensive documentation and comments
5. ✅ Validated with automated testing

See [COPILOT_MIGRATION_GUIDE.md](./COPILOT_MIGRATION_GUIDE.md) for detailed migration instructions.

## 🧪 Testing

All endpoints have been thoroughly tested. See [TESTING_REPORT.md](./TESTING_REPORT.md) for:
- Route functionality tests
- Error handling validation
- Performance comparisons
- CI/CD pipeline status

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| Node.js Runtime | Node.js 14 |
| Node.js Framework | Express.js 4.21.2 |
| Python Runtime | Python 3.9 |
| Python Framework | FastAPI |
| Containerization | Docker & Docker Compose |
| Package Manager | Yarn (Node.js), pip (Python) |
| Development Tools | nodemon, uvicorn |

## 📝 Notes

- Both servers can run independently or together
- The Node.js server is the primary implementation after migration
- Python server is kept for reference and comparison
- Hot-reload is enabled for rapid development
- All endpoints maintain functional equivalence between implementations
