import prisma from "../prisma/client"



class docModels {

    async createDocs(input_data:string,pr_id:number){
        return prisma.document.create({
            data:{
                project_id:pr_id,
                url:input_data,
                task_id:null
            }
        })

    }


}


export default new docModels()