const express=require("express");
const app=express();
var cors=require('cors')
const PORT=process.env.Port || 4000;
const Jobroute =require( "./route/JobRoute");

const database=require("./database");
database.connect();
app.use(express.json());
app.use(cors());
app.use("/job",Jobroute)

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your app is running"
    })
})

app.listen(PORT,()=>{
    console.log("App is running at 4000")
})

