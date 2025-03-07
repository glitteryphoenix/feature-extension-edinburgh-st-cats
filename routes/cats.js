// const express = require("express");
// const router = express.Router();
// const db = require("../model/helper");

// // GET all cats
// router.get("/", async (req, res) => {
//   try {
//     const results = await db("SELECT * FROM cats");
//     res.json(results.data); // ✅ Use results.data
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET a single cat by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const results = await db("SELECT * FROM cats WHERE id = ?", [req.params.id]);
//     if (results.data.length === 0) return res.status(404).json({ error: "Cat not found" });
//     res.json(results.data[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // POST a new cat
// router.post("/", async (req, res) => {
//   try {
//     const { name, location, image, description, colour, created_at, updated_at } = req.body;
//     await db(
//       "INSERT INTO cats (name, location, image, description, colour, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
//       [name, location, image, description, colour, created_at, updated_at ]
//     );
//     const results = await db("SELECT * FROM cats"); // ✅ Keep results.data
//     res.status(201).json(results.data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // DELETE a cat by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     const results = await db("DELETE FROM cats WHERE id = ?", [req.params.id]);
//     if (results.data.affectedRows === 0) return res.status(404).json({ error: "Cat not found" });
//     const updatedResults = await db("SELECT * FROM cats"); // ✅ Keep results.data
//     res.json(updatedResults.data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../model/helper");

// ✅ GET all cats
router.get("/", async (req, res) => {
  try {
    const results = await db("SELECT * FROM cats");
    res.json(results.data);
  } catch (err) {
    console.error("GET /cats error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET a single cat by ID
router.get("/:id", async (req, res) => {
  try {
    const results = await db("SELECT * FROM cats WHERE id = ?", [req.params.id]);
    if (results.data.length === 0) {
      return res.status(404).json({ error: "Cat not found" });
    }
    res.json(results.data[0]);
  } catch (err) {
    console.error(`GET /cats/${req.params.id} error:`, err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET all cats from LOCATION
router.get("/location/:location", async (req, res) => {
  try {
    const results = await db("SELECT * FROM cats WHERE location = ?", [req.params.location]);
    if (results.data.length === 0) {
      return res.status(404).json({ error: "No cats from this location" });
    }
    res.json(results.data);
  } catch (err) {
    console.error("GET /cats error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST a new cat (Fix for 500 Error)
router.post("/", async (req, res) => {
  try {
    const { name, location, image, description, colour } = req.body;

    // ✅ Validate required fields
    if (!name || !location || !description || !colour) {
      return res.status(400).json({ error: "All fields except image are required" });
    }

    // ✅ Insert without manually setting `created_at` and `updated_at`
    await db(
      "INSERT INTO cats (name, location, image, description, colour) VALUES (?, ?, ?, ?, ?)",
      [name, location, image || "", description, colour]
    );

    const results = await db("SELECT * FROM cats");
    res.status(201).json(results.data);
  } catch (err) {
    console.error("POST /cats error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE a cat by ID
router.delete("/:id", async (req, res) => {
  try {
    const catId = req.params.id;

    // ✅ Check if the cat exists before deleting
    const checkCat = await db("SELECT * FROM cats WHERE id = ?", [catId]);

    if (checkCat.data.length === 0) {
      return res.status(404).json({ error: "Cat not found" });
    }

    // ✅ Delete comments related to this cat to maintain data integrity
    await db("DELETE FROM comments WHERE cat_id = ?", [catId]);

    // ✅ Delete the cat
    await db("DELETE FROM cats WHERE id = ?", [catId]);

    // ✅ Fetch updated list of cats
    const updatedResults = await db("SELECT * FROM cats");
    res.json(updatedResults.data);
  } catch (err) {
    console.error(`DELETE /cats/${req.params.id} error:`, err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;



