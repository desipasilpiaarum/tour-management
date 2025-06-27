// File untuk mengatur server Node.js
// Menggunakan Express, dotenv, body-parser, cookie-parser, dan CORS

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");

const app = express();

// Middleware CORS agar frontend bisa mengirim cookie (JWT)
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

// Middleware untuk parsing body dan cookie
app.use(bodyParser.json());
app.use(cookieParser());

// Routing utama untuk autentikasi
app.use("/api/auth", authRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));