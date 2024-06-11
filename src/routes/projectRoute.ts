import express,{Router} from "express"
import { validateProject } from "../middleware/validateProject"
import { validateProjectId } from "../middleware/validateProjectId"
import upload from "../middleware/fileUpload"
import verifyToken from "../middleware/auth"
import { tryCatch } from "../utilty/tryCatch"




const projectController=require("../controller/projectController")
const router:Router=express.Router()


router.use(verifyToken)
router.get("/:id",validateProjectId,tryCatch(projectController.GetProject))
router.post("/create",validateProject,tryCatch(projectController.CreateProject))
router.post("/:id/upload",upload.single("file"),tryCatch(projectController.AttachDoc))
router.post("/:id/member",tryCatch(projectController.AddMember))


module.exports=router