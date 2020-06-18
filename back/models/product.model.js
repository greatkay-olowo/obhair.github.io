const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    color: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: String,
      required: true,
    },

    length: {
      type: String,
      required: true,
    },
    frontPage: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
