import mongoose from "mongoose";
import express from "express";
import testRoute from "./routes/test.routes.js";
const app = express();

app.use(express.json());

app.use("/test", testRoute);
// mongodb+srv://praveen:praveen@cluster0.muc641m.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(
  "mongodb+srv://travel:travel@travelcluster.nxjdigf.mongodb.net/test",
  () => {
    app.listen(3000, () => {
      console.log("app is running on port 3000");
    });
  }
);
