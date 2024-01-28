import { Request, Response } from "express";
import { accountModel } from "../model/accountModel";
;

export const transferFund = async (req: Request | any, res: Response) => {
    try {
        const{_id}= req.user;
        const {recieverAcctNo,amount} = req.body;
        const account = await accountModel.findOne({ user_id: _id });
        
    } catch (error) {
        
    }
}