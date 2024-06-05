import express,{Router,Request,Response} from "express"


const usercontroller=require("../controller/userController")
const router:Router=express.Router()


// routing 
router.get("/",usercontroller.GetUser)

 

module.exports=router