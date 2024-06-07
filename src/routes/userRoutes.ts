import express,{Router,Request,Response} from "express"
import validateUser from "../middleware/validateUser"


const usercontroller=require("../controller/userController")
const router:Router=express.Router()


// routing "name": "Add your name in the body"
router.post("/signup",validateUser,usercontroller.CreateUser)

 

module.exports=router