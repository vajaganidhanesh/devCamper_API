const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.status(200).json({ msg: "fetch all bootcamps" });
});
route.get("/:id", (req, res) => {
  res.status(200).json({ msg: "single all bootcamps" });
});
route.post("/", (req, res) => {
  res.status(200).json({ msg: "Another value has been updated in bootcamps" });
});

route.put("/:id", (req, res) => {
  res.status(200).json({ msg: `${req.params.id} fetch all bootcamps` });
});
route.delete("/:id", (req, res) => {
  res.status(200).json({ msg: "Delete has been done." });
});

module.exports = route;
