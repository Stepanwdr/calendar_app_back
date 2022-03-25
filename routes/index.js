import express from "express";
const router = express.Router();
import users from "./Users"
import events from "./Events"
router.get('/',(req,res,next)=>{
  try{
    res.json("home")
  }catch(e){
    next(e)
  }
})
router.use("/users",users)
router.use("/events",events)
export default router;
