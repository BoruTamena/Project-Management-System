import { Request,Response } from "express"
import userModels from "../models/userModels"
import bcrypt from 'bcrypt'
import Jwt, { TokenExpiredError } from "jsonwebtoken"



interface user {
    id:number
    email:string
    password:string
}

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

    res.cookie("jwt_cookie",refresh_token,{httpOnly:true,maxAge:24*60*60*1000})
    
    return res.status(200).json({accesstoken:token})


}



const refreshUserToken=(req:Request,res:Response)=>{

    const key= process.env.SECREATEKEY!
 
     const cookie=req.cookies
 
     if(!cookie?.jwt_cookie) return res.status(403).send("something wrong with cookie") // forbidden
 
     const refresh_token=cookie.jwt_cookie
 
     // get user whose this is refresh token is from memory cache i.e redis
 
 
     // verifing the referesh token 

    let payload:any
 
 
    try{

        payload=Jwt.verify(refresh_token,key) as Jwt.JwtPayload

    }catch(err){

        return res.sendStatus(401) //unauthorized

    }
  
      // Assuming payload contains 'id' and 'email'
    if (!payload || !payload.id || !payload.email) {
        return res.status(403).send("id does not contain email and id"); // Forbidden
    }


    const accesstoken=Jwt.sign({id:payload.id,email:payload.email},key,{expiresIn:"1hr"})
 
 
    return res.status(200).json({accesstoken:accesstoken})
 
 
 }

module.exports={    
    SignUpUser,
    LoginUser,
    refreshUserToken,
}