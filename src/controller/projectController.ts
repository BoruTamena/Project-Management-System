import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"
import { project } from "../type"
import projectModels from "../models/projectModels"
import documentModel from "../models/documentModel"
import memberMode from "../models/memberMode"
import sendingmail from "../utilty/email_config"


const GetProject=async (req:Request,res:Response)=>{

    const pr_id = parseInt(req.params.id)
    

    const project= await projectModels.getProjectById(pr_id)
    console.log(pr_id)
    console.log(project)

    res.json(project)

}

const CreateProject=async(req:Request,res:Response)=>{

    const pr = await projectModels.createNewProject(req.body)
    return res.status(201).json(pr)
}


const AttachDoc=async(req:Request,res:Response)=>{

    if(!req.file){
        return res.status(400).send("no doc file attached")
    }

    const id=parseInt(req.params.id)

    const fileurl=`/uploads/${req.file.filename}`

    // saving the file url to database

    const doc= await documentModel.createDocs(fileurl,id)

    console.log(fileurl)
    console.log(doc)


    return res.status(201).send(doc)
}

const AddMember=async(req:Request,res:Response)=>{

    const id =parseInt(req.params.id)
    const member=await memberMode.createProjectMember(id,req.body)

    if(!member)return res.status(500).send("internal server error")
    

    // sending email for the user to join the project 

   sendingmail({
        from:"no-reply@example.com",
        to: `${member.user_email}`,
        subject: "Join the project ",
        text: `Hello, Please by loging to the pms
                clicking this link :
                http://localhost:3000/user/login`,
        

    })

   
    return res.sendStatus(201)

}

module.exports={
    CreateProject,
    GetProject,
    AttachDoc,
    AddMember
}