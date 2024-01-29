const express = require("express");
const route=require("./route")
const app = express();
app.use(express.json())
app.use("/api",route)
app.get("/",(req,res)=>{
    res.send({msg:"this is a testing phase"})
})
app.listen(5500,()=>{
        console.log("server running on port 5500");
    })