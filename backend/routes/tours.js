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

module.exports = router;