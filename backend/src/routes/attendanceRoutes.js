import express from "express";
import { markAttendance ,getAttendance,deleteAttendance } from "../controllers/attendanceControllers.js";
import { getMyAttendance } from "../controllers/attendanceControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";





const router= express.Router();

router.post("/",authMiddleware,markAttendance);
router.get("/" ,authMiddleware,getAttendance);
router.delete("/:id",authMiddleware,deleteAttendance);




// router.get("/student/stats", authMiddleware, getStudentAttendance);

router.get(
  "/my",
  authMiddleware,
  getMyAttendance
);

export default router;