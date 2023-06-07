import express from "express";
import dotenv from "dotenv"
import { mentorsRouter } from "./Routers/mentors.js";
import { studentsRouter } from "./Routers/students.js";
import { welcomeRouter } from "./Routers/welcome.js";


// configure the envirenment
dotenv.config()

//initialize express server framework
const PORT=process.env.PORT;
const app=express();

//middleware
app.use(express.json());

//students routers
app.use("/mentors",mentorsRouter);
app.use("/students",studentsRouter);
app.use("/",welcomeRouter);


//listen to a server
app.listen(PORT,()=>console.log( `server started in localhost:9090`));