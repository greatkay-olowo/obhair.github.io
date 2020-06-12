const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const upload = require("../models/imageuploader");

//GET all product
router.get("/", (req, res) => {
  Product.find()
    .then((product) => {
      res.status(202).json(product);
    })
    .catch((err) =>
      res
        .status(400)
        .json({ Status: "failed", Message: `Cannot get all products. ${err}` })
    );
});

// Add new Product
router.post("/new", upload.single("profile"), (req, res) => {
  const { name, category, color, price, length, frontPage } = req.body;
  const image = req.file.filename;

  const newProduct = new Product({
    name,
    category,
    color,
    price,
    length,
    frontPage,
    image,
  });

  newProduct
    .save()
    .then(() =>
      res.status(202).json({ Status: "success", Message: "Product added." })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ Status: "Error", Message: `Product cannot be added. ${err}` })
    );
});

// get a product
router.get("/:id", upload.single("profile"), (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      const {
        name,
        category,
        color,
        price,
        length,
        frontPage,
        image,
      } = product;
      res.status(202).json({
        Status: "success",
        Message: { name, category, color, price, length, frontPage, image },
      });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ Success: "Error", Message: `cannot get product ${err}` })
    );
});

// update a product
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, category, color, price, length } = req.body;
  const image = req.file.filename;
  Product.findById(id)
    .then((product) => {
      product.name = name;
      product.category = category;
      product.color = color;
      product.price = price;
      product.length = length;
      product.image = image;
      product
        .save()
        .then(() =>
          res
            .status(202)
            .json({ Status: "success", Message: "Product Update Successfull!" })
        )
        .catch((err) =>
          res.status(400).json({
            Status: "Failed",
            Message: `Product Update Not Successfull. Error: ${err}`,
          })
        );
    })
    .catch((err) =>
      res.status(400).json({ Status: "Error", Message: `Error: ${err}` })
    );
});

//Delete a product
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then(() =>
      res
        .status(202)
        .json({ Status: "success", Message: `Product ${id} deleted.` })
    )
    .catch((err) =>
      res.status(400).json({
        status: "Error",
        Message: `Product delete not successfull. Error: ${err}`,
      })
    );
});

module.exports = router;
