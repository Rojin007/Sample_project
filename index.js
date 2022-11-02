const express = require("express");

const apiRoutes = require("./src/Routes");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SampleProject", () => {
  console.log("Database connected");
});
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello World");
});

app.use("/api/v1", apiRoutes);

app.listen(8080, () => {
  console.log("Server started...");
});
