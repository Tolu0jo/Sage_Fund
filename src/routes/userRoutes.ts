
import { Router } from "express"
import { signUp } from "../controller/userContoller"

const router = Router()

router.post("/signup",signUp)


export default router;