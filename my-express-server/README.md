# My Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate the setup of an Express application with Docker support.

## Project Structure

```
my-express-server
├── src
│   └── app.js          # Entry point of the application
├── package.json        # npm configuration file
├── Dockerfile          # Dockerfile for building the Docker image
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine.

### Running the Server Locally

1. Navigate to the project directory:

   ```
   cd my-express-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

3. Start the server using nodemon:

   ```
   yarn start
   ```

The server will be running on `http://localhost:8001`.

### Building the Docker Image

To build the Docker image for the Express server, run the following command in the project directory:

```
docker build -t my-express-server .
```

### Running the Docker Container

After building the image, you can run the Docker container with the following command:

```
docker run -p 8001:8001 my-express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.