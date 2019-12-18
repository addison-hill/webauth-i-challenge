const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const RestrictedRouter = require("./restricted-router");

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/restricted", RestrictedRouter);

router.get("/", (req, res) => {
  res.json({ api: "We live boys" });
});

module.exports = router;
