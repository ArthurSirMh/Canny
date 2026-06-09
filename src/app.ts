import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { Router } from "express";
dotenv.config();
connectDB();
const app = express()
console.log('s')
app.get('/', (req, res) => {
  res.send('Hello World')
})
console.log('sdafsdgfa')
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})