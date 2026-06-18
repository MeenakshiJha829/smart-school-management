import express from "express";
import { dashboardStats } from "../controllers/dashboardControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router=express.Router();

router.get("/stats",authMiddleware,dashboardStats);

export default router;