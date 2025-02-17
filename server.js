// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const db = require("./model/helper"); // ✅ Use `db` as per your project's structure

// const app = express();
// const PORT = process.env.PORT || 4000;

// app.use(cors()); // ✅ Allows frontend requests
// app.use((req, res, next) => {
//   console.log(`➡️  ${req.method} request to ${req.url}`);
//   next();
// });

// app.use(express.json()); // ✅ Enables JSON parsing

// // 🐱 **GET all cats**
// app.get("/api/cats", async (req, res) => {
//   try {
//     const results = await db("SELECT * FROM cats"); // ✅ No `.query()`
//     res.json(results.data);
//   } catch (err) {
//     console.error("Error fetching cats:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // 🆕 **POST a new cat**
// app.post("/api/cats", async (req, res) => {
//   try {
//     const { name, location, image, description, colour } = req.body;
//     if (!name || !location || !description || !colour) {
//       return res.status(400).json({ error: "All fields except image are required" });
//     }

//     await db("INSERT INTO cats (name, location, image, description, colour) VALUES (?, ?, ?, ?, ?)", 
//       [name, location, image || "", description, colour]);

//     const results = await db("SELECT * FROM cats"); // ✅ Fetch updated list
//     res.status(201).json(results.data);
//   } catch (err) {
//     console.error("Error adding cat:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✍️ **POST a comment**
// app.post("/api/comments/cat/:cat_id", async (req, res) => {
//   try {
//     const { title, comment, username } = req.body;
//     const cat_id = req.params.cat_id;

//     if (!title || !comment || !username) {
//       return res.status(400).json({ error: "Title, comment, and username are required" });
//     }

//     await db(
//       "INSERT INTO comments (title, comment, time, cat_id, username) VALUES (?, ?, NOW(), ?, ?)",
//       [title, comment, cat_id, username]
//     );

//     const results = await db("SELECT * FROM comments WHERE cat_id = ?", [cat_id]);
//     res.status(201).json(results.data);
//   } catch (err) {
//     console.error("Error posting comment:", err);
//     res.status(500).json({ error: err.message });
//   }
// });


// // 📝 **GET all comments for a specific cat**
// app.get("/api/comments/cat/:cat_id", async (req, res) => {
//   try {
//     const results = await db("SELECT * FROM comments WHERE cat_id = ?", [req.params.cat_id]);
//     res.json(results.data);
//   } catch (err) {
//     console.error("Error fetching comments:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/", (req, res) => {
//   res.json({ message: "API is running! Visit /api/cats to see all cats." });
// });


// // 🏁 **Start Server**
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./model/helper");

// ✅ Import route handlers
const catsRouter = require("./routes/cats");
const getCommentsRouter = require("./routes/getComments");
const postCommentsRouter = require("./routes/postComments");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// ✅ Debugging middleware to track incoming requests
app.use((req, res, next) => {
  console.log(`➡️  ${req.method} request to ${req.url}`);
  next();
});

// ✅ Use route handlers for cats and comments
app.use("/api/cats", catsRouter);
app.use("/api/comments", getCommentsRouter); // 🛠️ Fix: Ensure GET comments route is loaded
app.use("/api/comments", postCommentsRouter); // 🛠️ Fix: Ensure POST comments route is loaded

// ✅ Root test route to check if backend is running
app.get("/", (req, res) => {
  res.json({ message: "API is running! Visit /api/cats to see all cats." });
});

// 🏁 Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
