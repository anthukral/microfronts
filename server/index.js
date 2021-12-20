const express = require("express");
const { v4 } = require("uuid");
const app = express();
app.use("/login", (req, res) => {
  res.json({ sessionid: v4(), useid: v4(), body: req.body });
});
app.use("/", (_, res) => {
  res.json({ status: "Ok" });
});
app.listen(8080, () => {
  console.log("server started");
});
