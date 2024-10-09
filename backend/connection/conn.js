const mongoose = require("mongoose");
const conn = async () => {
  try {
    const response = await mongoose.connect(`${process.env.MONGO_URI}`);
    if (response) {
      console.log("Connected Successfully to DB");
    }
  } catch (error) {
    console.log(error);
  }
};

conn();