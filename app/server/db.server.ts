import mongoose, { ConnectOptions } from "mongoose";
import config from "../config/config";

interface MyConnectOptions extends ConnectOptions {
    useUnifiedTopology?: boolean;
  }

 export const connectToMongoDB = async () => {
    try {
      // Use MyConnectOptions instead of ConnectOptions
      await mongoose.connect(config.db, {
        useUnifiedTopology: true,
      } as MyConnectOptions);
  
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  };
  
  // Connect to MongoDB when this module is imported
  // connectToMongoDB();
  