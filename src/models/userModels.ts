import prisma from "../prisma/client"
import { user } from "../type"


class UserModel {


    async createNewUser(data:user){

        return prisma.user.create({
            data,
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

    async findAll(){

    }
}



export default new UserModel()
