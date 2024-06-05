import { Express,Request,Response,NextFunction } from "express";
import { body, validationResult } from "express-validator";



export const validateProject=[
    body("title").isString().withMessage("Name must be string ")
    .notEmpty().withMessage("should note be empty"),
    body("description").isString().withMessage("description must be string ")
    .notEmpty().withMessage("should not be empty"),

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