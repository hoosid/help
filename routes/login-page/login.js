const express = require('express');
const router = express.Router();
// const db = require('../../database/config');
// const pool = db.pool; // Assuming db is properly configured with a pool

router.get("/login", (req, res) => {
  res.render("login-sign/login");
});

// router.post("/login", (req, res) => {
//   const user1 = req.body.user;
//   const pass1 = req.body.password;

//   const sql = "SELECT * FROM sign_up WHERE user = ? OR email = ?";
//   pool.query(sql, [user1, user1], (error, results) => {
//     if (error) {
//       console.error("Error retrieving login data:", error);
//       res.status(500).send("An error occurred during login");
//     } else {
//       if (results.length > 0) {
//         const user = results[0].user;
//         const email = results[0].email;
//         const pass = results[0].password1;

//         if (pass1 === pass) {
//           res.redirect("/home2?user=" + user);
//         } else {
//           res.send("Incorrect password");
//         }
//       } else {
//         res.send("Incorrect username or email");
//       }
//     }
//   });
// });

router.get("/home2", (req, res) => {
  const userCookie = req.cookies.user;
  const userQuery = req.query.user;
  const user = userCookie || userQuery;
  res.render("home2", { user: user });
});

module.exports = router;
