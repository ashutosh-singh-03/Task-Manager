const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/conn");
const cors = require("cors");
const UserAPI = require("./routes/user");
app.use(cors());

app.use(express.json());
app.use("/api/v1", UserAPI);
// localhost:8000/api/v1/sign-in
app.use("/", (req, res) => {
  res.send("Hello from backend side");
});
const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server Started");
});
