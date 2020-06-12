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

// POST orders
router.post("/", (req, res) => {
  const { productId, customerId, status } = req.body;
  const orderDate = Date.parse(req.body.date);

  const newOrder = new Order({
    productId,
    customerId,
    orderDate,
    status,
  });

  newOrder
    .save()
    .then(() => res.json("Order Successfully placed!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
