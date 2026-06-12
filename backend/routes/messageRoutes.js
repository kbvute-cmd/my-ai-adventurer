const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello from Message Route!"
  });
});

module.exports = router;