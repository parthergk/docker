import  Express, { Request, Response }  from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const app = Express();
const prismaClient = new PrismaClient();

app.get('/', async(req:Request, res:Response)=>{
    const user = await prismaClient.user.findMany();
    res.json({message:"data from the db", user})
})

app.post('/', async(req:Request,res:Response)=>{
    await prismaClient.user.create({
        data:{
            username:"Gaurav Kumar",
            password: "Gaurav"
        }
    })
    res.json({message:"user created success"});
})

app.listen(3000, ()=>{
    console.log("http server is runing on port 3000");
    
})