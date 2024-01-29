var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
  res.render("login-sign/sign_up");
});

// app.post("/sign-up", (req, res) => {
//   var user = req.body.user;
//   var email = req.body.email;
//   var date = req.body.dob;
//   var pass1 = req.body.password1;
//   var pass2 = req.body.password2;
//   var gender = req.body.gender;
//   var sec = req.body.sec;
//   var image =req.body.image;
//   if (pass1 === pass2) {
//     var sql = "INSERT INTO sign_up (user, email, date_ness, password1, gender,image) VALUES (?, ?, ?, ?, ?,?)";

//     pool.query(sql, [user, email, date, pass1, gender,image], (error, results) => {
//       if (error) {
//         console.error("Il y a une erreur : ", error);
//         res.status(500).send("Erreur lors de l'inscription");
//       } else {
//         res.redirect("/login");
//       }
//     });
//   } else {
//     // res.send("Erreur de mot de passe");
//      res.redirect("/sign-up")
//   }
// });


  
  module.exports = router;