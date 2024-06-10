
import nodemailer from 'nodemailer'

import dotenv from 'dotenv';

dotenv.config();

interface mailoptions{
    from:string
    to:string
    subject:string
    text:string
    html?:string
}


const transporter=nodemailer.createTransport({

    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
})


const sendingmail=async(mailoptions:mailoptions)=>{

    try {

       const info=await transporter.sendMail(mailoptions)
       
       console.log(info)
       return info

    }catch(err){
        console.log('Error sending email',err)
    }

}


export default sendingmail