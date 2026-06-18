import express from "express";

import { createTeacher , getTeachers,updateTeacher,deleteTeacher } from "../controllers/teacherControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router=express.Router();

router.post("/",authMiddleware,createTeacher);
router.get("/",authMiddleware,getTeachers);
router.put("/:id",authMiddleware,updateTeacher);
router.delete("/:id",authMiddleware,deleteTeacher);

export default router;
