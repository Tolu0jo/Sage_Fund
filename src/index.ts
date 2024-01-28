import express from 'express';
import logger  from "morgan";
import cors from "cors";
import { PORT } from './config/config';
import { dbConnect } from './config/db';
import userRoutes from "./routes/userRoutes";


const app = express();

app.use(express.json());

app.use(logger("dev"));

app.use(cors());

app.use("/api",userRoutes)

dbConnect()


app.listen(PORT, ()=>{
    console.log(`App listening on ${PORT} ...`);
})