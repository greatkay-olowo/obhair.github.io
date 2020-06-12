const express = require("express");
const router = express.Router();
const Admin = require("../models/admin.model");

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Admin.find({ email: email })
    .then((result) => {
      if (result.length === 0) {
        res.status(400).json("Account not found");
      } else {
        if (result[0].password === password) {
          res.status(200).json("true");
        } else {
          res.status(400).json("Login not correct");
        }
      }
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

//change password
router.get("/changepassword/:email", (req, res) => {
  const { email, password } = req.body;
  Admin.find({ email: email })
    .then((admin) => {
      admin.password = password;
      admin
        .save()
        .then(() => res.json("Pass Update Successfull!"))
        .catch((err) =>
          res.status(400).json("Profile Update Not Successful. Error: " + err)
        );
    })
    .catch((err) => res.status(400).json("Error:" + err));
});
module.exports = router;
