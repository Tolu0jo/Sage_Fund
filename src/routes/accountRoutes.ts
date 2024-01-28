import { Router } from "express";
import { createAccount, getAccount } from "../controller/accountController";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/account",auth,createAccount);

router.get("/account",auth,getAccount)


export default router;