const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// ✅ Debug log when the route is used
console.log("✅ GET /api/comments/cat/:cat_id route loaded!");

router.get("/cat/:cat_id", async (req, res) => {
  try {
    console.log(`➡️  Fetching comments for cat ID: ${req.params.cat_id}`); // ✅ Debug log

    const results = await db("SELECT * FROM comments WHERE cat_id = ?", [req.params.cat_id]);

    res.json(results.data);
  } catch (err) {
    console.error("Error fetching comments:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;



