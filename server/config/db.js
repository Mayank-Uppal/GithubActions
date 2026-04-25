import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://myank07official:Mayank%409550@mayank.jzywnhr.mongodb.net/Notes");
        console.log("MongoDB connected ✅");
    } catch (error) {
        console.log(error); 
    }
}