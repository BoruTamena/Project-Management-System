import express,{Router} from "express"
import { validateProject } from "../middleware/validateProject"
import { validateProjectId } from "../middleware/validateProjectId"
import upload from "../middleware/fileUpload"
import verifyToken from "../middleware/auth"




const projectController=require("../controller/projectController")
const router:Router=express.Router()


router.use(verifyToken)
router.get("/:id",validateProjectId,projectController.GetProject)
router.post("/create",validateProject,projectController.CreateProject)
router.post("/:id/upload",upload.single("file"),projectController.AttachDoc)


module.exports=router