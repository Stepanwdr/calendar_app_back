import validate from "../services/validate";
import {HttpError} from "http-errors";
import  jwt from "jsonwebtoken";
import Users from "../models/Users";
const {JWT_SECRET}=process.env
class userController{
    static register = async (req, res, next) => {
    try{
        const{name,email,phone,password,role}=req.body
        validate(req.body, {
            name: 'required|alpha',
            email: 'required|email',
            //phone: ['required', 'regex:/^\\(?[+]?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/'],
        }).throw();
        const existUser=await Users.findOne(
            {
                where:{
                    $or:[{ email },
                        { phone },
                    ]
                }
            }
        )
        if (existUser) {
            const errors = {};
            if (existUser.email === email) {
                errors.email = ['Email must be unique'];
            }

            throw HttpError(422, { errors });
        }
        const user=await Users.create({
            name,email,phone,password,role
        })
        const token=jwt.sign({userId:user.id},JWT_SECRET)
        res.json({
        status: 'ok',
        token
        })}catch(e){
        next(e)
    }
    }
    static login=async(req,res,next)=> {
    try{
        const{password="add56b5212e81abc4432624a8e6049aa",email='st@mail.rus'}=req.body
        console.log(email, password,2222222222222222222);
        // validate(req.body, {
        //     email: 'required|email',
        //     password: 'required:string|between:2,16',
        // }).throw();
        const user = await Users.findOne({
            where: { email },
        });
        if (!user || user.getDataValue('password') !== Users.passwordHash(password)) {
            throw HttpError();
        }
        const token=jwt.sign({userId:user.id},JWT_SECRET)
        res.json({
            status:"ok",
            token,
    } )}catch(e){
        next(e)
    }
    }
}
export default userController;