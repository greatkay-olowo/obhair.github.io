const express = require("express");
const router = express.Router();
const Customer = require("../models/customer.model");

// Get all customer
router.get("/", (req, res) => {
  Customer.find()
    .then((Customer) => res.json(Customer))
    .catch((err) =>
      res
        .status(404)
        .json({ Status: "Error", Message: `Cannot get all customers. ${err}` })
    );
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
      res
        .status(401)
        .json({ Status: "Failed", Message: `${email} already taken.` });
    } else {
      newCustomer
        .save()
        .then(() =>
          res
            .status(201)
            .json({ Status: "success", Message: "Customer added." })
        )
        .catch((err) =>
          res
            .status(400)
            .json({
              Status: "Error",
              Message: `Customer cannot be added. ${err}`,
            })
        );
    }
  });
});

//signin a customer
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  Customer.find({ email: email })
    .then((result) => {
      if (result.length === 0) {
        res
          .status(404)
          .json({ Status: "Failed", Message: "Account not found" });
      } else {
        if (result[0].password === password) {
          res.status(202).json({ Status: "success", Message: "true" });
        } else {
          res
            .status(400)
            .json({ Status: "Failed", Message: "Login not correct" });
        }
      }
    })
    .catch((err) =>
      res
        .status(400)
        .json({ Status: "Error:", Message: `Login not successful. ${err}` })
    );
});

// Find a customer
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Customer.findById(id)
    .then((customer) => {
      const { firstName, lastName, phone, email, address } = customer;
      res.status(202).json({
        status: "success",
        Message: { firstName, lastName, phone, email, address },
      });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ Status: "Error", Message: `No customer found ${err}` })
    );
});

// update a customer
router.put("/:id", (req, res) => {
  const { firstName, lastName, phone, email, address } = req.body;
  const { id } = req.params;
  Customer.findById(id)
    .then((customer) => {
      customer.firstName = firstName;
      customer.lastName = lastName;
      customer.phone = phone;
      customer.email = email;
      customer.address = address;
      customer
        .save()
        .then(() =>
          res
            .status(202)
            .json({ Status: "success", Message: "Profile update successfull" })
        )
        .catch((err) =>
          res
            .status(400)
            .json({
              Status: "Error",
              Message: `Profile cannot be updated. ${err}`,
            })
        );
    })
    .catch((err) =>
      res
        .status(400)
        .json({ Status: "Error", Message: `Profile cannot be updated. ${err}` })
    );
});

//Delete a customer's account
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Customer.findByIdAndDelete(id)
    .then((result) =>
      res
        .status(202)
        .json({ Status: "success", Message: `${id} Account Deleted` })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ Status: "Failed", Message: `Delete Not successfull. ${err}` })
    );
});

module.exports = router;
