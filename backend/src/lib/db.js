import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
        try {
                const conn = await mongoose.connect(process.env.MONGODB_URI, {
                        serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
                });                    
                console.log(`MongoDB connected successfully ${conn.connection.host}`);
        } catch (error) {
                console.log("MongoDB connection error", error); 
        }
}