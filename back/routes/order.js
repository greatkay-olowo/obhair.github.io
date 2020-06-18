const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

// Get all Orders
router.get("/all", (req, res) => {
  Order.find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Get a. Orders
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Order.findById(id)
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json("Error:" + err));
});

// POST orders status
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  Order.findById(id)
    .then((order) => {
      order.status = status;
      order
        .save()
        .then(() => {
          res
            .status(202)
            .json({ Status: "success", Message: "Order Update Successfull!" });
        })
        .catch((err) =>
          res.status(400).json({
            Status: "Failed",
            Message: `Order Update Not Successfull. Error: ${err}`,
          })
        );
    })
    .catch((err) =>
      res.status(400).json({ Status: "Error", Message: `Error: ${err}` })
    );
});

module.exports = router;
