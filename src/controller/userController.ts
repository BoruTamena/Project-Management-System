import { Request,Response } from "express"
import userModels from "../models/userModels"
import bcrypt from 'bcrypt'
import Jwt, { TokenExpiredError } from "jsonwebtoken"
import tokenModel from "../models/tokenModel"
import sendingmail from "../utilty/email_config"

const crypto=require('crypto')


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

    if(user){

        const rnd_tk=crypto.randomBytes(16).toString("hex")
        const tkn=await tokenModel.createtoken(user.id,rnd_tk)

        if (tkn){
            
            sendingmail({
                from:"no-reply@example.com",
                to: `${req.body.email}`,
                subject: "Account Verification Link",
                text: `Hello, ${req.body.fristname} Please verify your email by
                      clicking this link :
                      http://localhost:3000/user/verify-email/${user.id}/${tkn.token} `,

                html:`
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f4f4f4;
                                margin: 0;
                                padding: 0;
                            }
                            .container {
                                width: 80%;
                                margin: auto;
                                background: #ffffff;
                                padding: 20px;
                                border-radius: 5px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }
                            .header {
                                background: #333333;
                                color: #ffffff;
                                padding: 10px;
                                text-align: center;
                            }
                            .content {
                                margin: 20px 0;
                            }
                            .footer {
                                background: #333333;
                                color: #ffffff;
                                padding: 10px;
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                
                    <div class="container">
                        <div class="header">
                            <h1>Hello, ${req.body.fristname}</h1>
                        </div> 

                        <div class="content">

                        <h3>Please verify your email by</h3>
                            <p>This web app is a project management system application </p>
                            <a href="http://localhost:3000/user/verify-email/${user.id}/${tkn.token}"> 
                            <button>verify Here</button>
                            </a>
                        </div>


                    <div class="footer">
                        <p>&copy; 2024 Your Company</p>
                    </div>
                </div> 
            </body>
            </html> `
     });
      
        }else{
            return res.status(400).send("token not created")
        }

        return res.status(201).json(user)
    }else{
        return res.status(409).send("details are not correct ")
    }
    
}

const verifyEmail=async(req:Request,res:Response)=>{

    try{

        const tkn=req.params.token
        const user_id= parseInt(req.params.id) 
        const user_token= await tokenModel.getusertoken(tkn,user_id)

        if (!user_token){
            return res.status(400).send("Your verfication link may have expired")
        }else{

            const user =await userModels.getuserById(user_id)

            if(!user){
                return res.status(200).send("we can't find user for this verfication ")
            } else if(user.is_verified){
                return res.status(200).send('user has been already verified . please login !')
            }else{
                const user_update=userModels.updateUserStatus(user_id)

                if(!user_update) return res.sendStatus(500)
                else{
                  return res.status(200).json(user_update)
            
                }
            }
        }

    }catch(err){

        console.log(err)

    }

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

    res.cookie("jwt_cookie",refresh_token,{httpOnly:true,
                                    maxAge:24*60*60*1000,
                                   })
    
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

const logout=(req:Request,res:Response)=>{

    const cookies=req.cookies

    if (!cookies?.jwt_cookie) return res.sendStatus(204)

    const refresh_token=cookies.jwt

    // getting user of this token from data base
   
    
    // delete the refresh token from cach or data base
         //... this would be clearing the session table 


    res.clearCookie("jwt_cookie",{httpOnly:true,sameSite:"none",
                                secure:true,maxAge:24*60*60*1000}) // set secure:true in production

    return res.status(200).send("logout seccussfully ")

}
module.exports={    
    SignUpUser,
    LoginUser,
    refreshUserToken,
    logout,
    verifyEmail
}