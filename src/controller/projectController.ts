import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"
import { project } from "../type"
import projectModels from "../models/projectModels"


const GetProject=async (req:Request,res:Response)=>{

    const pr_id = parseInt(req.params.id)
    

    const project= await projectModels.getProjectById(pr_id)
    console.log(pr_id)
    console.log(project)

    res.json(project)

}

const CreateProject=async(req:Request,res:Response)=>{

    // creating new project 
    const pr=projectModels.createNewProject(req.body)
    res.json(pr)

    // next()

}


module.exports={
    CreateProject,
    GetProject
}