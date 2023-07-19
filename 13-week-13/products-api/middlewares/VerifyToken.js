const jwt = require("jsonwebtoken");
const { register, login } = require("../modules/users.js");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.token || req.headers["x-access-token"];

  console.log("token=>>>", accessToken);

  if (!accessToken) return res.status(401).json({ msg: " not authorized" });

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ msg: "verifed token failed" });

    const email = decoded.email;
    login(email)
      .then((row) => {
        console.log("row verify=>>>>", row);
        if (row.length > 0) next();
      })
      .catch((e) => {
        return res.status(401).json({ msg: " not authorized" });
      });
  });
};
module.exports = {
  verifyToken,
};
