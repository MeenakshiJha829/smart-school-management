import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createNote,getNotices,deleteNotes } from "../controllers/noticeControllers.js";

import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router =express.Router();

router.post("/",authMiddleware,adminMiddleware,createNote);
router.get("/",authMiddleware,getNotices);
router.delete("/:id",authMiddleware,adminMiddleware,deleteNotes);

export default router;