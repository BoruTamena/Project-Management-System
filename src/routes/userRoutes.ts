import express,{Router,Request,Response} from "express"
import validateUser from "../middleware/validateUser"


const usercontroller=require("../controller/userController")
const router:Router=express.Router()


// routing "name": "Add your name in the body"
router.post("/signup",validateUser,usercontroller.SignUpUser)

router.post("/login",usercontroller.LoginUser)

router.get("/refresh",usercontroller.refreshUserToken)
 

module.exports=router