import prisma from "../prisma/client";
import { task } from "../type";



interface input {
    task_id:number,
    status:string
}


class TaskModels{


    async createNewTask(input:task){

        return prisma.task.create({
            data:{
                ...input,
                 progress:{
                    create:{
                        status:"incompleted",
                     }
                }
            }

        })

    }

    async updateStatus(input_data:input){

        return prisma.progress.update({
            where:{
               task_id:input_data.task_id
            },
            data:{
               status:input_data.status,
            },
        })
    }


    async getTasksByStatus(id:number,status:string){
        return prisma.task.findMany({
            where:{
                project_id:id,
                progress:{
                    status:status
                }
            },
            include:{
                progress:true
            }
        })
    }


    async getAllTask(){
        return prisma.task.findMany()
    }

    

}


export default new TaskModels()