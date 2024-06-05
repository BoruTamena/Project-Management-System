import express,{Router} from "express"
import { validateTask } from "../middleware/validateTask"



const taskController=require("../controller/taskController")

const router:Router = express.Router()

router.get("",taskController.getTasks)
router.post("/update",taskController.updateTaskStatus)
router.post("/create",validateTask,taskController.createNewTask)

// router.post("/update",taskController.updateStatus)

module.exports=router