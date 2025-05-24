const express = require("express");

const router = exports.Router();

// only admin can access this route

router.get("/admin", (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// only admin amd manager can access this route
router.get("/manager", (req, res) => {
  res.json({ message: "Welcome Manager" });
});

// All  can access this route
router.get("/user", (req, res) => {
  res.json({ message: "Welcome user" });
});

module.exports = router;
