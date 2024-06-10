


import { Request,Response,NextFunction } from "express";

import Jwt  from "jsonwebtoken";


interface CustRequest extends Request{
    user ?: string | object
}


const verifyToken=(req:CustRequest,res:Response,next:NextFunction)=>{

    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
   
    if (!token) return res.sendStatus(403)

    try{

        const key=process.env.SECREATEKEY!
        const verified= Jwt.verify(token!,key)
        req.user=verified

        next()

    }catch (err){

        res.status(400).send('invalid request ')
    }
     
    
}


export default verifyToken