import express,{Router} from "express"
import { validateTask } from "../middleware/validateTask"
import verifyToken from "../middleware/auth"
import { tryCatch } from "../utilty/tryCatch"



const taskController=require("../controller/taskController")

const router:Router = express.Router()

// adding auth middleware 
router.use(verifyToken)   
router.get("",tryCatch(taskController.getTasks))
router.post("/update",tryCatch(taskController.updateTaskStatus))
router.post("/:id/create",validateTask,tryCatch(taskController.createNewTask))

// router.post("/update",taskController.updateStatus)

module.exports=router