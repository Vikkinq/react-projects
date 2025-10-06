const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { v4: uuid } = require("uuid");

const app = express();
const LOCAL_PORT = 5000;
const mongo_env = process.env.MONGO_ATLAS;
const mongo_url = "mongodb://127.0.0.1:27017/1_MERN_TODO";

const Task = require("./models/Tasks");

app.set("views", path.join(__dirname, "views"));

main().catch((err) => console.log("Error Connection", err));
async function main() {
  await mongoose.connect(mongo_url);
  console.log("DB CONNECTED!");
}

// HTTP FORMATS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
  {
    id: uuid(),
    task: "Watch Football",
    description: "To have fun with Bros and also Watch the Greatest of All Time Play",
    deadline: "October 10, 2025",
    completed: false,
  },
  {
    id: uuid(),
    task: "Master MERN",
    description: "To Learn the Basics and Foundations of MERN and become a Full Stack Developer in the Future",
    deadline: "October 15, 2025",
    completed: false,
  },
];

app.get("/api/tasks", (req, res) => {
  res.json(data);
});

app.post("/api/tasks", (req, res) => {});

app.listen(LOCAL_PORT, () => {
  console.log(`Server Started: http://localhost:${LOCAL_PORT}`);
});
