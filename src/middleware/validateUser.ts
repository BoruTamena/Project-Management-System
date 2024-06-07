import { body, validationResult } from "express-validator";
import { Request,Response,NextFunction } from "express";





const validateUser=[
    body("fristname").isString().withMessage("should be string ")
                      .notEmpty().withMessage("can't be null"),
    body("lastname").isString().withMessage("should be string ")
                        .notEmpty().withMessage("can't be null"),
    
    body("email").isEmail().withMessage("should be email address")
                  .isString().withMessage("should be of string type"),

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


export default validateUser