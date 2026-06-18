import express from "express";
import { getActivities } from "../controllers/activityControllers";

const router=express.Router();

router.get("/activities",getActivities);