import express from "express";
import mongoose from 'mongoose';
import { port,mongodburl } from './config.js';
import clientrouter from './routes/clientrouter.js';
import userrouter from "./routes/userrouter.js";




const app=express();
app.use(express.json());
app.use("/client",clientrouter);
app.use("/user",userrouter);




app.listen(port,()=>{
    console.log("the backend is listening to port : "+port);
})

mongoose.connect(mongodburl)
.then(console.log('mongo db is successfullyconnected'))
.catch((err)=>{console.log("error")});

