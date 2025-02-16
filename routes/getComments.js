const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// ✅ GET all comments for a specific cat
router.get("/cat/:catid", async (req, res) => {
  try {
    const { catid } = req.params;
    const results = await db("SELECT * FROM comments WHERE cat_id = ?", [catid]);

    if (results.data.length === 0) {
      return res.status(404).json({ error: "No comments found for this cat" });
    }

    res.json(results.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

