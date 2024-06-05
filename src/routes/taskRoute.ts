import express,{Router} from "express"
import { validateTask } from "../middleware/validateTask"



const taskController=require("../controller/taskController")

const router:Router = express.Router()

router.use("/create",validateTask,taskController.createNewTask)

module.exports=router