import shortUUID from "short-uuid";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/config";

const shortUUIDInstance = shortUUID("0123456789");

export const generateUniqueNumericId=()=>{
  return shortUUIDInstance.generate().slice(0, 10);
}

export const generateJwtToken = async(_id:string)=>{
    try {
        return jwt.sign({_id},JWT_SECRET_KEY,{expiresIn:"1d"})
    } catch (error) {
        console.log(error)
    }
}

export const verifyToken = async(token:string)=>{
    try {
       return jwt.verify(token, JWT_SECRET_KEY)
    } catch (error) {
        console.log(error) 
    }
}

