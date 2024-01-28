import dotenv from "dotenv"
dotenv.config()


export const PORT = process.env.NODE_ENV === "test" ?Number(process.env.PORT) : 3000
export const MONGODB_URI = process.env.MONGODB_URI as string;
export const MONGODB_TEST_URI = process.env.MONGODB_TEST_URI as string;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;