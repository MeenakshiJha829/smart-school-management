import express from "express";
import { addResult,getStudentsResult,resultSummary ,getMyResults,getAllResults,deleteResult} from "../controllers/resultControllers.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router= express.Router();

router.post("/",authMiddleware,addResult);
router.get("/my",authMiddleware,getMyResults);
router.get("/summary/:student_id",authMiddleware,resultSummary);
router.get("/", authMiddleware, getAllResults);
router.get("/:student_id",authMiddleware,getStudentsResult);
router.delete("/:id", authMiddleware, deleteResult);

export default  router;