## Finance Data Processing & Access Control Backend

A backend system for managing financial records with role-based access control and summary analytics.

## Live Demo

https://finance-backend-aowh.onrender.com

## API Documentation

## Features

- User and Role Management (Admin, Analyst, Viewer)
- Financial Records CRUD (Create, Read, Update, Delete)
- Filtering & Pagination (by date, category, type)
- Dashboard Summary APIs
  - Total Income
  - Total Expense
  - Net Balance
  - Category-wise Summary
  - Recent Transactions
- Role-Based Access Control (RBAC)
- Input Validation & Error Handling
- Data Persistence using MongoDB
- Clean architecture (MVC + middleware + services)

## Tech Stack

- Backend: Node.js + Express
- Database: MongoDB (Atlas)
- ORM: Mongoose
- Deployment: Render

## Project Structure

project/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── services/
├── config/
├── app.js
└── README.md

## Setup Instructions (Local)

1. Clone Repo

git clone https://github.com/your-username/finance-backend

cd finance-backend

2. Install Dependencies

npm install

3. Create .env File

MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Run Server

npm run dev

Server will run on :- http://localhost:5000

## Role-Based Access

| Role    | Permissions                 |
| ------- | --------------------------- |
| Viewer  | Can only view records       |
| Analyst | Can view + access summaries |
| Admin   | Full access (CRUD + users)  |

## Sample API Endpoints

POST/users
POST /records
GET /records?type=income&category=salary
GET /summary/total-income
GET /summary/total-expense
GET /summary/net-balance
GET /summary/category
GET /summary/recent

## Design Decisions

Used MVC architecture for clean separation of concerns
Implemented middleware-based RBAC for scalability
Used aggregation pipelines for efficient summary calculations
Designed flexible filtering using query parameters
Modular structure for maintainability

## Trade-offs

Used simple header-based role system instead of JWT (for simplicity)
Focused more on backend logic rather than authentication layer

## Future Improvements

- JWT Authentication (secure auth instead of header-based roles)
- Advanced search optimization (full-text search, indexing)

## Important Note

This project is developed as part of a backend assessment to demonstrate:

API design
Data modeling
Access control
Backend architecture thinking
