import { Request,Response,NextFunction } from "express"

const errorHandler= async(error:Error,req:Request,res:Response,next:NextFunction)=>{


    return res.status(400).send(error.message)

}


export default errorHandler