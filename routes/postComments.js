const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// ✅ Debug log when the POST route is loaded
console.log("✅ POST /api/comments/cat/:cat_id route loaded!");

router.post("/cat/:cat_id", async (req, res) => {
  try {
    const { title, comment, username } = req.body;
    const cat_id = req.params.cat_id;

    // ✅ Log incoming data for debugging
    console.log("➡️ Received comment data:", { title, comment, username, cat_id });

    // ✅ Ensure required fields exist
    if (!title || !comment || !username) {
      console.error("❌ Missing fields:", { title, comment, username });
      return res.status(400).json({ error: "Title, comment, and username are required" });
    }

    // ✅ Insert comment into database
    await db(
      "INSERT INTO comments (title, comment, time, cat_id, username) VALUES (?, ?, NOW(), ?, ?)",
      [title, comment, cat_id, username]
    );

    // ✅ Fetch and return updated list of comments
    const results = await db("SELECT * FROM comments WHERE cat_id = ?", [cat_id]);
    console.log("✅ Successfully added comment:", results.data);
    
    res.status(201).json(results.data);
  } catch (err) {
    console.error("❌ Error posting comment:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;



