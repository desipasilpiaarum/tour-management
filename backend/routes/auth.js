// File untuk mengatur API registrasi, login, logout, dan cek user login

require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware untuk verifikasi token JWT dari cookie
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const [existingUser] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const defaultRole = "user";

    await db.query(
      "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
      [username, email, hashedPassword, defaultRole]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Ambil user, pastikan field role ikut diambil
    const [users] = await db.query("SELECT id, username, email, password, role FROM users WHERE email = ?", [email]);
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = users[0];
    if (!user.role) {
      // Debug log jika role tidak ada
      console.error("User found but role is missing:", user);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Selalu masukkan role ke payload, fallback ke "user" jika null/undefined
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role || "user",
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false, // ubah true jika dihosting dengan HTTPS
        sameSite: "Lax",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        message: "Login successful",
        user: payload,
      });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      sameSite: "Lax",
      secure: false,
    })
    .json({ message: "Logged out successfully" });
});

// ME
router.get("/me", verifyToken, (req, res) => {
  const { id, username, email, role } = req.user;
  res.json({
    user: { id, username, email, role },
  });
});

module.exports = router;