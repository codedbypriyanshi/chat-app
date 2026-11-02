
import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected");
        });

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "chat-app"
        });

        console.log("MongoDB connection successful");

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
};
