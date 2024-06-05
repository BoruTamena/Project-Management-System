import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"


const prisma= new PrismaClient()


const GetUser= async(req:Request,res:Response)=>{
    res.send("Getting user")

  

    // next()

}


module.exports={
    GetUser
}