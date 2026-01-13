const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Route
app.post("/api/support", (req, res) => {
  const { subject, description } = req.body;

  if (!subject || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query =
    "INSERT INTO support_requests (subject, description) VALUES (?, ?)";

  db.query(query, [subject, description], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    res.status(201).json({ message: "Form submitted successfully" });
  });
});

// Start Server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
