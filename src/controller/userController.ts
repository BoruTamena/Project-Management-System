import { Request,Response } from "express"
import userModels from "../models/userModels"
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken"

const SignUpUser= async(req:Request,res:Response)=>{

    const user_data=req.body
    // hashing user password for security purpose 
    user_data.password=await bcrypt.hash(user_data.password,10)
    const user=await userModels.createNewUser(user_data)
    res.status(201).json(user)
}

const LoginUser=async(req:Request,res:Response)=>{

    const key= process.env.SECREATEKEY

    const {email,password}=req.body

    const user =await userModels.GetUser(email)

    if(! user){
      
        return res.status(401).send("Unauthorized user ")
    }

    const passwordMatch= await bcrypt.compare(password,user.password)

    if (!passwordMatch){
        
        return res.status(401).send("Unauthorized user ")

    }

    const token= Jwt.sign(user,`${key}`,{expiresIn:`1hr`})
    const refresh_token=Jwt.sign(user,`${key}`,{expiresIn:"1d"})

    res.cookie("jwt",refresh_token,{httpOnly:true,maxAge:24*60*60*1000})
    res.status(200).json({accesstoken:token})



}

module.exports={    
    SignUpUser,
    LoginUser
}