import prisma from "../prisma/client";
import { task } from "../type";



class TaskModels{


    async createNewTask(data:task){

        return prisma.task.create({
            data,
        })

    }

}


export default new TaskModels()