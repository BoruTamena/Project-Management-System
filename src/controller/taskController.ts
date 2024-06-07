import { Request,Response } from "express"
import taskModels from "../models/taskModels"



const createNewTask=async (req:Request,res:Response)=>{

    const task=await taskModels.createNewTask(req.body)

    if (task.id){

      return  res.status(201).json(task)
            
    }

    res.send(200)


}

const updateTaskStatus=async(req:Request,res:Response)=>{

    const t=await taskModels.updateStatus(req.body)

    res.json(t)

}
const getTasks=async (req:Request,res:Response)=>{

    const tasks=await taskModels.getAllTask()
    res.status(200).json(tasks)
}


module.exports={
    createNewTask,
    updateTaskStatus,
    getTasks
}