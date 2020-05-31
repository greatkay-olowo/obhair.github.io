const express = require("express");
const router = express.Router();
const Customer = require("../models/customer.model");

// Get all customer
router.get("/", (req, res) => {
  Customer.find()
    .then((Customer) => res.json(Customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a new customer
router.post("/new", (req, res) => {
  const { firstName, lastName, phone, email, address, password } = req.body;
  const date = Date.parse(req.body.date);

  const newCustomer = new Customer({
    firstName,
    lastName,
    phone,
    email,
    address,
    password,
    date,
  });

  Customer.find({ email: email }).then((result) => {
    if (result.length !== 0) {
      res.status(400).json(`${email} already taken`);
    } else {
      newCustomer
        .save()
        .then(() => res.json("Customer added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    }
  });
});

//signin a customer
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  Customer.find({ email: email })
    .then((result) => {
      if (result.length === 0) {
        res.status("400").json("Account not found");
      } else {
        if (result[0].password === password) {
          res.status("200").json("true");
        } else {
          res.status("200").json("Login not correct");
        }
      }
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

// Find a customer
router.post("/:id", (req, res) => {
  const { id } = req.params;
  Customer.findById(id)
    .then((customer) => {
      const { firstName, lastName, phone, email, address } = customer;
      res.status(200).json({ firstName, lastName, phone, email, address });
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

// update a customer
router.post("/update/:id", (req, res) => {
  const { firstName, lastName, phone, email, address } = req.body;
  const { id } = req.params;
  Customer.findById(id)
    .then((customer) => {
      customer.firstName = firstName;
      customer.lastName = lastName;
      customer.phone = phone;
      customer.email = email;
      customer.address = firstName;
      customer
        .save()
        .then(() => res.json("Profile Update Successfull!"))
        .catch((err) =>
          res.status(400).json("Profile Update Not Successful. Error: " + err)
        );
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

//Delete a customer's account
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  Customer.findByIdAndDelete(id)
    .then((result) => res.json("Account Deleted"))
    .catch((err) =>
      res.status(400).json("Delete Not Successfull. Error: " + err)
    );
});

module.exports = router;
