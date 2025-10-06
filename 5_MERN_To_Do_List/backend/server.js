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

app.get("/api/tasks", async (req, res) => {
  try {
    const taskData = await Task.find();
    res.json(taskData);
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const newData = new Task(req.body);
    await newData.save();
    console.log(`Successfully Created Data: `, req.body);
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.listen(LOCAL_PORT, () => {
  console.log(`Server Started: http://localhost:${LOCAL_PORT}`);
});
