import { Request,Response,NextFunction } from "express";
import { body, validationResult } from "express-validator";


export const validateTask=[
    body("title").isString().withMessage("should be string "),
    body("description").isString().withMessage("should be string "),
    body("priority").isInt().withMessage("should be integer"),
    body("project_id").isInt().withMessage("should be integer"),
    (req:Request,res:Response,next:NextFunction)=>{

        const errors=validationResult(req)

        if(!errors.isEmpty()){

            return res.status(400).json({
                errors:errors.array()
            })
        }

        next()

    

    }


]