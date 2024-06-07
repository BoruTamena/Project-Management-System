import prisma from "../prisma/client";
import { project } from "../type";

class ProjectModel {
    async createNewProject(data: project) {
    
        return prisma.project.create({
            data,
        });
    }



    async getProjectById(id: number) {
        return prisma.project.findUnique({
            where: {
                id: id,
            },
            include: {
                documents: true,
                tasks:true,
            },
        });
    }
}

export default new ProjectModel();
