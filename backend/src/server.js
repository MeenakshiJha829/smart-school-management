import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import HomeworkRoute from "./routes/homeworkRoute.js";

import { authMiddleware } from "./middleware/authMiddleware.js";
import {adminMiddleware} from "./middleware/adminMiddleware.js";

dotenv.config();


const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/students",studentRoutes);
app.use("/api/attendance",attendanceRoutes);
app.use("/api/results",resultRoutes);
app.use("/api/notices",noticeRoutes);
app.use("/api/dashboard",dashboardRoutes);
app.use("/api/teachers",teacherRoutes);
app.use("/api/homework",HomeworkRoute);

app.get("/api/admin",authMiddleware,adminMiddleware,(req,res)=>{
    res.json({message:"Welcome Admin"});
})

app.get("/",(req,res)=>{
    res.send("API working");
})



const PORT=5000;

app.listen(PORT,()=>{
    console.log(`Server is listening to ${PORT}`);

})