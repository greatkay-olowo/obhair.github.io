const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
