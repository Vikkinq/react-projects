const mongoose = require("mongoose");

const Task = require("../models/Tasks");
const items = require("./seed_data");

const mongo_url = "mongodb://127.0.0.1:27017/1_MERN_TODO";

main().catch((err) => console.log("Error Connection", err));
async function main() {
  await mongoose.connect(mongo_url);
  console.log("DB CONNECTED!");
}

const seedDB = async () => {
  try {
    await Task.deleteMany({});
    await Task.insertMany(items);

    console.log(`Seeded ${items.length} Tasks`);
  } catch (err) {
    console.error(`Seed Error: `, err);
  } finally {
    await mongoose.disconnect();
    console.log("DISCONNECTED!");
  }
};

seedDB();
