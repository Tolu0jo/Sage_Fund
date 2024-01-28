import { Request,Response,NextFunction } from "express";
import { validateToken } from "../utils/util";

export const auth = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const isAuthorized = await validateToken(req);
        if(isAuthorized) {
           return next();
        }
        return res.status(403).json({Error: "Not Authorized"}); 
    } catch (error) {
        
    }
}