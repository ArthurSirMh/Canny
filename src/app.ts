import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { Router } from "express";
import router from "./routers";
import cookieParser from "cookie-parser";
dotenv.config();
connectDB();
const app = express()
app.use(express.json());
app.use(cookieParser());
app.use('/', router)
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
export default app;