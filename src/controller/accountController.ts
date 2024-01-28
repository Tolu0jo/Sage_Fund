import { Request, Response } from "express";
import { accountModel } from "../model/accountModel";
import { generateAcctNo } from "../utils/util";

export const createAccount = async (req: Request | any, res: Response) => {
  try {
    const { _id } = req.user;
     
    const existingAccount = await accountModel.findOne({ user_id: _id });
    if(existingAccount){
        return res
        .status(400)
        .json({ message: "Account already created." });
    }
    const newAccount = new accountModel({
      user_id: _id,
      acctNo: generateAcctNo(),
    });

    const acct = await newAccount.save();
    return res
      .status(201)
      .json({ message: "Account created successfully", acct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const getAccount = async (req: Request | any, res: Response) => {
  try {
    const { _id } = req.user;

    const account= await accountModel.findOne({ user_id: _id });

    return res
      .status(200)
      .json({ message: "Accounts retrieved successfully", account});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const fundAccount = async (req: Request | any, res: Response) => {
    try {
        const { _id } = req.user;
        const {amount}=req.body;
        const amountInNumber = parseInt(amount);
    
        const existingAccount = await accountModel.findOne({ user_id: _id });
    
        if(!existingAccount){
            return res
            .status(400)
            .json({ message: "Kindly create an account before funding." });
        }
    
       existingAccount.balance += amountInNumber ;

       const account= await existingAccount.save();

       return res
       .status(200)
       .json({ message: "Accounts retrieved successfully", account });
    } catch (error) {
        console.error(error);
    return res.status(500).json({ Error: "Internal Server Error" }); 
    }

}