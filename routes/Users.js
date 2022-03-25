import userController from "../controllers/userController"
import express from "express";
const router = express.Router();
router.post("/register",userController.register)
router.post("/login",userController.login)
// router.get("/users",userController.users)
export default router;