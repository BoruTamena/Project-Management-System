import express,{Router} from "express"
import { validateTask } from "../middleware/validateTask"
import verifyToken from "../middleware/auth"



const taskController=require("../controller/taskController")

const router:Router = express.Router()

// adding auth middleware 
router.use(verifyToken)   
router.get("",taskController.getTasks)
router.post("/update",taskController.updateTaskStatus)
router.post("/create",validateTask,taskController.createNewTask)

// router.post("/update",taskController.updateStatus)

module.exports=router