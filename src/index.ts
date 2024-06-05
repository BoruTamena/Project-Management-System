import  express, { Express } from "express";
import dotenv from "dotenv"


// requiring routes 
const user=require("./routes/userRoutes")
const projectRoute =require("./routes/projectRoute")
const taskRoute=require("./routes/taskRoute")

dotenv.config()

const app:Express=express()

const port = process.env.PORT || 3000 


app.use(express.json())
app.use("/user",user)
app.use("/project",projectRoute)

app.use("/task",taskRoute)

app.listen(port)






