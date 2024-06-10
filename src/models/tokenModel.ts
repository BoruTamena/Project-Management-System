import prisma from "../prisma/client";



class token{

    async createtoken(userId:number,tkn:string){

        return prisma.token.create({
            data:{
                user_id:userId,
                token:tkn
            }
        })

    }

    async getusertoken(tkn:string,id:number){
        return prisma.token.findFirst({
    
            where:{
                user_id:id,
                token:tkn,  
            },
            select:{
                id:true,
                token:true
            }
        })
    }
}


export default new token()