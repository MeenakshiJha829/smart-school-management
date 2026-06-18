import { addStudent,getStudents ,getSingleStudent,updateStudent,deleteStudent,searchStudents} from "../controllers/studentControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import express from "express";
const router=express.Router();

router.post("/",authMiddleware ,adminMiddleware,addStudent);
router.get("/",authMiddleware,getStudents);
router.get("/search",authMiddleware,searchStudents);
router.get("/:id",authMiddleware,getSingleStudent);
router.put("/:id",authMiddleware,adminMiddleware,updateStudent);
router.delete("/:id",authMiddleware,adminMiddleware,deleteStudent);

export default router;




