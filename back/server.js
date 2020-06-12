const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// setup middleware
app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use("/image", express.static("uploads"));

// connect to the database
const mongoDB = process.env.ATLAS_URI;
mongoose
  .connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error("An error has occured", err));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// routes
const CustomerRouter = require("./routes/customer");
const ProductRouter = require("./routes/product");
const OrderRouter = require("./routes/order");
const AdminRouter = require("./routes/admin");

app.use("/customer", CustomerRouter);
app.use("/product", ProductRouter);
app.use("/order", OrderRouter);
app.use("/admin", AdminRouter);

app.get("/", (req, res) => {
  res.send("hahahahahah");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
