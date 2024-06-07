import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"
import userModels from "../models/userModels"


const prisma= new PrismaClient()


const CreateUser= async(req:Request,res:Response)=>{

    const user=await userModels.createNewUser(req.body)
    res.json(user)
}


module.exports={
    CreateUser
}