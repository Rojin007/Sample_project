const { generateAccessToken } = require("./src/Utils/jwt");
const User = require("./src/Models/Schemas");
const express = require("express");

const apiRoutes = require("./src/Routes");

const healer = "debugger";
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

const mark = new User({ name: "Mark" });
console.log(mark.name);
//mark.save();
const heal = generateAccessToken(healer);
console.log(heal);

app.listen(8080, () => {
  console.log("Server started...");
});
