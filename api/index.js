import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.error('Error connecting to MongoDB:', e);
})

const app = express();

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})