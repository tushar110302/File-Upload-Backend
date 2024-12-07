import mongoose, { mongo } from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(`${process.env.DB_URI}/fileUploadDB`)
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting to DB");
        process.exit(1);
    }
}
export {connectDB};