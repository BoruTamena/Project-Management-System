import prisma from "../prisma/client";
import { project } from "../type";


class ProjectModel {

    async createNewProject(data:project){

        return prisma.project.create({
            data,
        }) 

    }


    async getProjectById(id:number){

        return prisma.project.findUnique({
            where:{
                id:id,
            }
        })

    }

}


export default new ProjectModel