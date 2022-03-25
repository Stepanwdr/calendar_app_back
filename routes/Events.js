
import express from "express";
import eventController from "../controllers/eventController";
const router = express.Router();
router.get("/",eventController.getEvents)
router.post("/create",eventController.createEvent)

export default router;
