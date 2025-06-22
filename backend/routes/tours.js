// File untuk mengatur API untuk tour

const express = require("express");
const db = require("../db");
const jwt = require("jsonwebtoken");
const router = express.Router();

// GET all tours
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM tours ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single tour by id (beserta reviews)
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM tours WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Not found" });

    const tour = rows[0];
    const [reviews] = await db.query(
      "SELECT * FROM reviews WHERE tour_id = ? ORDER BY date DESC",
      [req.params.id]
    );
    tour.reviews = reviews;
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// CREATE tour
router.post("/", async (req, res) => {
  const { title, location, description, image, price, city, distance, category } = req.body;
  try {
    await db.query(
      "INSERT INTO tours (title, location, description, image, price, city, distance, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [title, location, description, image, price, city, distance, category]
    );
    res.status(201).json({ message: "Tour created" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE tour
router.put("/:id", async (req, res) => {
  const { title, location, description, image, price, city, distance, category } = req.body;
  try {
    await db.query(
      "UPDATE tours SET title=?, location=?, description=?, image=?, price=?, city=?, distance=?, category=? WHERE id=?",
      [title, location, description, image, price, city, distance, category, req.params.id]
    );
    res.json({ message: "Tour updated" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE tour
router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM tours WHERE id = ?", [req.params.id]);
    res.json({ message: "Tour deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST review
router.post("/:id/reviews", async (req, res) => {
  const tourId = req.params.id;
  const { rating, text } = req.body;
  let username = "Anonim";
  const date = new Date();

  // Ambil username dari JWT jika login
  try {
    if (req.cookies && req.cookies.token) {
      const JWT_SECRET = process.env.JWT_SECRET;
      const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
      if (decoded && decoded.username) {
        username = decoded.username;
      }
    }
  } catch (err) {
    // Jika token invalid, tetap pakai "Anonim"
  }

  try {
    await db.query(
      "INSERT INTO reviews (tour_id, username, rating, text, date) VALUES (?, ?, ?, ?, ?)",
      [tourId, username, rating, text, date]
    );
    res.json({ message: "Review berhasil ditambahkan" });
  } catch (err) {
    res.status(500).json({ error: "Gagal menambah review" });
  }
});

// GET latest reviews (untuk homepage)
router.get("/reviews/all", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, username, text FROM reviews ORDER BY date DESC LIMIT 12");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data review" });
  }
});

module.exports = router;