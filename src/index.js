//always connect db using a try catch block
//talking to the database takes time,so always make sure you use async await
// require{'dotenv'}.config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

//wheneve an async function finishes execution it also returns a promise
connectDB()
  .then(() => {
    //starting server after establishing connection to database
    const server = app.listen(process.env.PORT || 7000, () => {
      console.log(
        `Server connection established. Listening on ${process.env.PORT}`
      );
    });
    server.on("error", (error) => {
      console.log("SERVER ERROR!!! : ", error);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed !!!", err);
  });
