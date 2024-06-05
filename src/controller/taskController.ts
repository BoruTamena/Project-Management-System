
import { Request,Response } from "express"
import taskModels from "../models/taskModels"
import { STATUS_CODES } from "http"


const createNewTask=async (req:Request,res:Response)=>{

    const task=await taskModels.createNewTask(req.body)

    if (task.id){

      return  res.status(201).json(task)
            
    }

    res.send(200)


}


module.exports={
    createNewTask
}