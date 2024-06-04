import express,{Router,Request,Response} from "express"



const router:Router=express.Router()




router.get("/",(req:Request,res:Response,next)=>{


    res.send("hello there !")

})


module.exports=router