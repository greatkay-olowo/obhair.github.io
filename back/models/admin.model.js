const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },

  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Customer", adminSchema);

module.exports = Admin;
