// File untuk mengatur server Node.js
// Menggunakan Express, dotenv, body-parser, cookie-parser, dan CORS

require("dotenv").config();
const express = require("express");

const app = express();

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));