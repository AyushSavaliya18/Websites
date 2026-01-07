import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const DATABASE_URL = "mongodb://localhost:27017/Travel";
        await mongoose.connect(DATABASE_URL, {
            dbName: "Travel"
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    } 
};

export default connectdb;
