# Spring Boot Backend - Next.js + Spring Boot Full-Stack Application

## Overview
This is the backend for the full-stack application, built using **Spring Boot 3.4.4**. It includes a custom authentication filter, a REST API to store and retrieve posts in memory, and proper DTO handling.

## Author Information
- **Name**: Madhusudhan J Vagale  
- **Email**: mjv.vagale@gmail.com  

## Technologies Used
- **Spring Boot 3.4.4**
- **Java 21**
- **Spring Web**
- **Lombok**

## Features
- **Custom Authentication Filter**:
  - Checks for `PinggyAuthHeader` in requests.
  - If missing or empty, returns `401 Unauthorized`.
  - Stores the header value in a `ThreadLocal` variable.

- **Controllers**:
  - `POST /post` - Accepts a JSON request with title & body and stores it in memory.
  - `GET /list` - Returns a list of stored posts along with their respective `PinggyAuthHeader` values.

- **Proper DTOs** for handling request and response.
- **Error handling & validation**.

## Installation & Running the Backend
1. Open **Spring Tool Suite (STS 4)** or any IDE.
2. Import the backend project.
3. Ensure **Java 17/21/24** is installed.
4. Run the application using:
   ```sh
   mvn spring-boot:run

 
**Backend runs on** http://localhost:9091.

**API Endpoints**

**POST**	/post	Submits a post with title, body, and PinggyAuthHeader.

**GET**		/list	Fetches all stored posts.