const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

//GET all product
router.get("/", (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add new Product
router.post("/new", (req, res) => {
  const { name, category, color, price, length } = req.body;
  const newProduct = new Product({
    name,
    category,
    color,
    price,
    length,
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get a product
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      const { name, category, color, price, length } = product;
      res.status(200).json({ name, category, color, price, length });
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

// update a product
router.post("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, category, color, price, length } = req.body;

  Product.findById(id)
    .then((product) => {
      product.name = name;
      product.category = category;
      product.color = color;
      product.price = price;
      product.length = length;
      product
        .save()
        .then(() => res.json("Product Update Successfull!"))
        .catch((err) =>
          res.status(400).json("Product Update Not Successfull. Error: " + err)
        );
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

//Delete a product
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then(() => res.json("Product Deleted."))
    .catch((err) =>
      res.status(400).json("Product Delete Not Successfull. Error: " + err)
    );
});

module.exports = router;
