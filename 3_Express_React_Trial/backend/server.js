const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["symon", "fritz", "blancaflor", "tae"] });
});

app.listen(5000, () => {
  console.log("Server Started: localhost:5000");
});
