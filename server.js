require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "street_cats_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL!");
});

// 🐱 API Route: Get All Cats
app.get("/cats", (req, res) => {
  db("SELECT * FROM cats", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 🆕 API Route: Add a New Cat
app.post("/cats", (req, res) => {
  const { name, location, image, description, colour } = req.body;
  db(
    "INSERT INTO cats (name, location, image, description, colour) VALUES (?, ?, ?, ?, ?)",
    [name, location, image, description, colour],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Cat added!", id: result.insertId });
    }
  );
});

// ✍️ API Route: Add a Comment
app.post("/comments", (req, res) => {
  const { title, comment, time, cat_id, username } = req.body;
  db(
    "INSERT INTO comments (title, comment, time, cat_id, username) VALUES (?, ?, ?, ?, ?)",
    [title, comment, time, cat_id, username],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Comment added!", id: result.insertId });
    }
  );
});

// Start Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
