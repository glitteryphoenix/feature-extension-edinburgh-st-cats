const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// ✅ POST a new comment for a specific cat
router.post("/cat/:catid", async (req, res) => {
  try {
    const { catid } = req.params;
    const { comment_text, author } = req.body;

    if (!comment_text || !author) {
      return res.status(400).json({ error: "Comment text and author are required" });
    }

    await db(
      "INSERT INTO comments (cat_id, comment_text, author) VALUES (?, ?, ?)",
      [catid, comment_text, author]
    );

    // Fetch updated comments after insertion
    const results = await db("SELECT * FROM comments WHERE cat_id = ?", [catid]);
    res.status(201).json(results.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
