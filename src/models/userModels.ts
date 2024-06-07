import prisma from "../prisma/client"
import { user } from "../type"


class UserModel {


    async createNewUser(data:user){

        return prisma.user.create({
            data,
        })

    }

    async findAll(){

    }
}



export default new UserModel()
