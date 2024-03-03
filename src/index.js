//always connect db using a try catch block
//talking to the database takes time,so always make sure you use async await
// require{'dotenv'}.config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
connectDB();

/*
//connect database
//below is using IIFE concept-take a function and execute it immediately
import express from "express";
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error : ", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR : ", error);
    throw error;
  }
})();
*/
