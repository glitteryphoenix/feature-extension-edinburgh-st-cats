# 🐾 Edinburgh Street Cats Tracker

This is a **full-stack web application** built with **React, Node.js, Express, and MySQL** to **track street cats in Edinburgh**. Users can:
- View all reported street cats 🐱
- Add a new cat with details and an image 📸
- View individual cat details and comments ✍️
- Leave comments on specific cats 💬
- See cat locations on an interactive map 📍
- Delete cats if necessary ❌

---

## **🛠 Tech Stack**
### **Frontend (React)**
- **React Router** for navigation
- **Bootstrap** for styling
- **Leaflet.js** for maps
- **Fetch API** for data requests

### **Backend (Node.js & Express)**
- **Express.js** for routing
- **MySQL** as the database
- **dotenv** for environment variables
- **CORS** to allow frontend-backend communication

### Dependencies 

Run `npm install` in the project folder to install dependencies related to the backend 

`cd client` and run `npm install` ro install dependencies related to the frontend 

### Database Prep 

Create `.env` file in project directory and add 

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=street_cats_db
PORT=4000

### Running the Application 

1. Start the Backend 
Go to project directory and run `npm start` 
It should run at: http://localhost:4000/

2. Start the Frontend 
`cd client` 
`npm run dev` 
The app should be accessible at: http://localhost:5173/

### API Endpoints 

Cats API

GET = /api/cats
POST = /api/cats
GET = /api/cats/:id
DELETE = /api/cats/:id 

Comments API 

GET = /api/comments/cat/:cat_id
POST = /api/comments/cat/:cat_id

---



