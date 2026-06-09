import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import router from "./routers";
dotenv.config();
const app = express();
app.use(express.json());
connectDB();

// route
app.use("/api", router);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});