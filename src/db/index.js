import mongoose from "mongoose";

import {DB_NAME} from "../constant.js";

const connectDB=async()=>{
    try { 
        console.log("MongoDB URI:", process.env.MONGODB_URL)
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection FAILED. ",error);
        process.exit(1)
    }
}

export default connectDB