import  express, { Express } from "express";
import dotenv from "dotenv"
import upload from "./middleware/fileUpload";
import cookieParser from "cookie-parser"
import errorHandler from "./middleware/error_middleware";

// requiring routes 
const user=require("./routes/userRoutes")
const projectRoute =require("./routes/projectRoute")
const taskRoute=require("./routes/taskRoute")

dotenv.config()

const app:Express=express()

const port = process.env.PORT || 3000 

app.use(express.json())
app.use(express.urlencoded({ extended: true }));    
app.use(cookieParser())

app.use("/user",user)
app.use("/project",projectRoute)

app.use("/task",taskRoute)

app.use(errorHandler)
app.listen(port)






