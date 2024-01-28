import express from 'express';
import logger  from "morgan";
import cors from "cors";
import { PORT } from './config/config';


const app = express();

app.use(express.json());

app.use(logger("dev"));

app.use(cors());







app.listen(PORT, ()=>{
    console.log(`App listening on ${PORT} ...`);
})