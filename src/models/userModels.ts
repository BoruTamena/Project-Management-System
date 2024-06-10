import prisma from "../prisma/client"
import { user } from "../type"


class UserModel {


    async createNewUser(data:user){

        return prisma.user.create({
            data,
        })

    }

    async getuserById(id:number){

        return prisma.user.findUnique({
            where:{
                id:id,
            }
        })
    }
    async GetUser(email:string){
        
        return prisma.user.findFirst({
            where:{
                email:email,

              
            },
            select:{
                id:true,
                email:true,
                password:true,
            }
        })

    }

    async updateUserStatus(id:number){

        return prisma.user.update({
            where:{
                id:id,
            },
            data:{
                is_verified:true
            }
        })
    }

    async findAll(){

    }
}



export default new UserModel()
