import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js"
import cors from "cors";

dotenv.config();

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { app, server } from './lib/socket.js';

app.use(express.json({limit: '10mb'}));
app.use(cookieParser());
app.use(cors({
        origin: "http://localhost:5173",
        credentials: true,
}))

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

const port = process.env.PORT;

server.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
        connectDB();
});

