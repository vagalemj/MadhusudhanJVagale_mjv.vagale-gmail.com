# Next.js + Spring Boot Full-Stack Application

## Overview
This is a full-stack application built using **Spring Boot 3.4.4** (backend) and **Next.js** (frontend). The project includes a custom authentication filter, in-memory storage for posts, and a responsive UI.

## Author Information
- **Name**: Madhusudhan J Vagale  
- **Email**: mjv.vagale@gmail.com  

---

## Technologies Used
### Backend:
- **Spring Boot 3.4.4**
- **Java 21**
- **Spring Web**
- **Lombok**

### Frontend:
- **Next.js**
- **React**
- **Axios**
- **CSS for styling**

---

## Features
### Backend:
- **Custom Authentication Filter**:
  - Checks for `PinggyAuthHeader` in requests.
  - If missing or empty, returns `401 Unauthorized`.
  - Stores the header value in a `ThreadLocal` variable.

- **Controllers**:
  - `POST /post` - Accepts a JSON request with `title` & `body` and stores it in memory.
  - `GET /list` - Returns a list of stored posts along with their respective `PinggyAuthHeader` values.

- **Proper DTOs** for request and response handling.
- **Error handling & validation**.

### Frontend:
- **Form to submit posts** with `Title`, `Body`, and `Auth Code`.
- **List of submitted posts** fetched from the backend.
- **Error handling & validation**.
- **Responsive UI**.

---

## Installation & Running the Application
### Backend Setup (Spring Boot)
1. Open **Spring Tool Suite (STS 4)** or any IDE.
2. Import the backend project.
3. Ensure **Java 21** is installed.
4. Run the application using:
   ```sh
   mvn spring-boot:run

**Backend runs on** http://localhost:8080.

## Frontend Setup (Next.js)

1. Open **VSCode**.
2. Navigate to the frontend folder: **cd frontend**
3. Install dependencies: **npm install**
4. Start the frontend: **npm run dev**

**Frontend runs on** http://localhost:3000.

## API Endpoints

**POST**	/post	Submits a post with title, body, and PinggyAuthHeader.
**GET**	/list	Fetches all stored posts.