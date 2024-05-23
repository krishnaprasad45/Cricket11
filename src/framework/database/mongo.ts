import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const mongoUrl:string | undefined = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    if(mongoUrl)await mongoose.connect(mongoUrl);
    console.log("database connected");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
