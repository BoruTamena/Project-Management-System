
import { Express,Request,Response,NextFunction } from "express"
import { param, validationResult } from "express-validator"

export const validateProjectId =[

    param("id").isInt({gt:0}).withMessage("project id should be greater than 0"),
    (req:Request,res:Response,next:NextFunction)=>{

        const errors=validationResult(req)


        if(! errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array()
            })
        }

        next()

    }


]