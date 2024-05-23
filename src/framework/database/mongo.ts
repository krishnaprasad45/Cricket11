import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const mongoUrl = process.env.MONGO_URL

const connectDB = async () => {
  try {
    if(mongoUrl)await mongoose.connect(mongoUrl);
    console.log("database connected");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
