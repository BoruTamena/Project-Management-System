import express,{Router} from "express"
import { validateProject } from "../middleware/validateProject"
import { validateProjectId } from "../middleware/validateProjectId"



const projectController=require("../controller/projectController")
const router:Router=express.Router()


router.get("/:id",validateProjectId,projectController.GetProject)
router.post("/create",validateProject,projectController.CreateProject)


module.exports=router