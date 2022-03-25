import Events from "../models/Events";
class eventController{
    static createEvent=async (req,res,next)=>{
try {
const {date,description,guest,userId}=req.body
    console.log(date,description,guest,userId)
    const event=await Events.create({
        date,description,guest,userId
    })
    res.json({
      status:"ok",
        event
    })
}catch(e){
    next(e)
}
    }
    static getEvents=async (req,res,next)=>{
        try {
const {userId}=req.query
            console.log(userId)
            const currentUserEvents=await Events.findAll({
                where: {
                    userId
                }
        })
          res.json({
              currentUserEvents
          })

        }catch(e){
            next(e)
        }
}
}
export default  eventController;