import { Router } from "express";
import { createAccount, fundAccount, getAccount } from "../controller/accountController";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/account",auth,createAccount);

router.get("/account",auth,getAccount)

router.post("/account/fund",auth,fundAccount)

export default router;