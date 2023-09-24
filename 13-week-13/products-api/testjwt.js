const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { name: "John", email: "john@gmail.com", id: 16 },
  "@4563$tgf7*",
  {
    expiresIn: "60s",
  }
);

// console.log(token);

const oldtoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJpZCI6MTYsImlhdCI6MTY4ODI4MjQyMSwiZXhwIjoxNjg4MjgyNDgxfQ.0AimWJxBHjnWilAaYgzIMhmAtPNws4X4gvZhTRv3QRk";

jwt.verify(token, "@4563$tgf7", (err, decoded) => {
  if (err) return console.log(err);
  console.log(decoded);
});
