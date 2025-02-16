const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// GET all cats
router.get("/", async (req, res) => {
  try {
    const results = await db("SELECT * FROM cats");
    res.json(results.data); // ✅ Use results.data
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single cat by ID
router.get("/:id", async (req, res) => {
  try {
    const results = await db("SELECT * FROM cats WHERE id = ?", [req.params.id]);
    if (results.data.length === 0) return res.status(404).json({ error: "Cat not found" });
    res.json(results.data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new cat
router.post("/", async (req, res) => {
  try {
    const { name, location, image, description, colour, created_at, updated_at } = req.body;
    await db(
      "INSERT INTO cats (name, location, image, description, colour, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, location, image, description, colour, created_at, updated_at ]
    );
    const results = await db("SELECT * FROM cats"); // ✅ Keep results.data
    res.status(201).json(results.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a cat by ID
router.delete("/:id", async (req, res) => {
  try {
    const results = await db("DELETE FROM cats WHERE id = ?", [req.params.id]);
    if (results.data.affectedRows === 0) return res.status(404).json({ error: "Cat not found" });
    const updatedResults = await db("SELECT * FROM cats"); // ✅ Keep results.data
    res.json(updatedResults.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


