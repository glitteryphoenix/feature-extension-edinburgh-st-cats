# 🐱 Edinburgh Street Cats Tracker

A **full-stack web application** for tracking, viewing, and commenting on street cats in **Edinburgh**. Built with **React, Node.js, Express, MySQL, and Leaflet.js** for an interactive mapping experience. 🏡📍

---

## 🎯 Features
✅ **View all street cats** on an interactive **map**  
✅ **Add a new cat** with a name, image, location, description, and color  
✅ **View individual cat details**  
✅ **Leave comments** on each cat  
✅ **Delete a cat** (admin feature)  
✅ **Responsive UI** with Bootstrap & custom styles  
✅ **Fast backend with MySQL database & Express.js**  

---

## 🛠️ Technologies Used
### **Frontend** (📍 `React.js`)
- React Router for navigation
- Bootstrap for styling
- Leaflet.js for mapping Edinburgh’s neighborhoods
- Fetch API for communication with the backend

### **Backend** (🛠 `Node.js + Express`)
- Express.js for API routing
- MySQL for the database
- CORS for handling cross-origin requests
- dotenv for managing environment variables

--

## 🎯 Installation Guide
### **1️⃣ Clone the Repository**

git clone https://github.com/YOUR_GITHUB_USERNAME/edinburgh-street-cats.git

cd edinburgh-street-cats

run npm install in the project directory. This will install server-related dependencies such as express. 

cd client and run npm install. This will install client dependencies. 

create a MySQL database 

CREATE DATABASE street_cats_db;

import the database schema 

run the following command inside the project directory: 

npm run migrate 

this will create the necessary tables (cats and comments)

configure .env files 

create a .env file in the project directory with: 

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=street_cats_db
PORT=4000

RUNNING THE APPLICATION 

start the backend 

go to the project directory and run npm start 

it should run at: 

It should run at: http://localhost:4000/ 

start the frontend: 

cd client 
npm run dev 

the app should be accessible at: http://localhost:5173/

📌 API Endpoints
🐱 Cats API
Method	Endpoint	Description
GET	/api/cats	Get all cats
POST	/api/cats	Add a new cat
GET	/api/cats/:id	Get details of a specific cat
DELETE	/api/cats/:id	Delete a cat
💬 Comments API
Method	Endpoint	Description
GET	/api/comments/cat/:cat_id	Get all comments for a specific cat
POST	/api/comments/cat/:cat_id	Add a comment to a specific cat

✅ Interactive Map → See where street cats were spotted 📍
✅ Cat Profiles → View detailed info about each cat 🐱
✅ Comments → Add notes about a cat and read others' thoughts ✍️
✅ Bootstrap Styling → Responsive, mobile-friendly design 📱
✅ Delete Functionality → Remove cats if needed ❌


