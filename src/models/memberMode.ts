import prisma from "../prisma/client";

interface data {
    role:string
    email:string
}


class member {

    async createProjectMember(id:number,input_data:data){

        return prisma.member.create({
            data:{
                project_id:id,
                role:input_data.role,
                user_email:input_data.email
            }
        })
    }
}


export default new member()