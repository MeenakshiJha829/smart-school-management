import express from "express";

import { createHomework,getHomework,deleteHomeWork } from "../controllers/homeworkControllers.js";

const router=express.Router();

router.post("/",createHomework);
router.get("/",getHomework);
router.delete("/:id",deleteHomeWork);

export default router;