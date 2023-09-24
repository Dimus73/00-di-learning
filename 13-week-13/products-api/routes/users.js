const express = require("express");
const { verifyToken } = require("../middlewares/VerifyToken.js");
const router = express.Router();

const { _register, _login } = require("../controllers/users.js");

router.post("/register", _register);
router.post("/login", _login);
router.get("/token", verifyToken, (req, res) => {

  
  res.sendStatus(200);
});
router.delete("/logout", (req, res) => {
  const accessToken = req.cookies.token;
  if (!accessToken) return res.sendStatus(204);

  res.clearCookie("token");

  return res.sendStatus(200);
});

module.exports = {
  router,
};
