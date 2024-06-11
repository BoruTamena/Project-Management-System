import express,{Router,Request,Response} from "express"
import validateUser from "../middleware/validateUser"
import { tryCatch } from "../utilty/tryCatch"


const usercontroller=require("../controller/userController")
const router:Router=express.Router()


// routing "name": "Add your name in the body"
router.post("/signup",validateUser,tryCatch(usercontroller.SignUpUser))

router.post("/login",tryCatch(usercontroller.LoginUser))

router.get("/refresh",tryCatch(usercontroller.refreshUserToken))

router.get("/logout",tryCatch(usercontroller.logout))

router.get("/verify-email/:id/:token",tryCatch(usercontroller.verifyEmail))
 

module.exports=router