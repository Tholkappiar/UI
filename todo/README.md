# Todo App

This is a full-stack Todo App built with Spring Boot for the backend, React for the frontend, and Tailwind CSS for styling the user interface.

## Features

- Create, read, update, and delete todo items
- Mark todo items as complete or incomplete

## Technologies Used

### Backend

- Spring Boot

### DataBase

- MySql

### Frontend

- React
- Tailwind CSS

## Getting Started

### Prerequisites

- Java Development Kit (JDK) installed
- Node.js and npm installed

### Backend Setup

1. Clone the repository
2. Navigate to the backend directory
3. Create a MySQL database and update the application.properties file with your database credentials
4. Build and run the Spring Boot application

### Docker Setup

A Docker image for the backend has been created and hosted on Docker Hub. You can pull and run the Docker image using the following commands:

    ```bash
    docker pull tholkappiar/todo-spring
    docker run -p 8080:8080 tholkappiar/todo-spring
    ```

This will run the Spring Boot backend application in a Docker container and expose it on port 8080.

### Frontend Setup

1. Navigate to the frontend directory
2. Install the dependencies by running `npm install`
3. Start the development server with `npm run dev`
4. Open your browser and navigate to `http://localhost:5173`
