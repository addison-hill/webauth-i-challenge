const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Successfully logged in!" });
});

router.get("/something", (req, res) => {
  res.status(200).json({ message: "Successfully logged in!" });
});

module.exports = router;
