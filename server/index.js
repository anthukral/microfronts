const express = require("express");
const { v4 } = require("uuid");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", (req, res) => {
  const sessionId = v4();
  const userid = v4();
  // res
  //   .status(200)
  //   .send(JSON.stringify({ sessionId, userid, body: { ...req.body } }));
  res.json({ sessionId, userid, body: { ...req.body } });
});
app.use("/", (_, res) => {
  res.json({ status: "Ok" });
});
app.listen(8080, () => {
  console.log("server started");
});
