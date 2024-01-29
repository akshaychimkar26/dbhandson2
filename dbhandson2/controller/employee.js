const {database}=require("../db")
const userdata=database.collection("Employee")

const addemp=async(req,res)=>{
    const data=req.body;
    const result=await userdata.insertMany(data)
    res.send({msg:"succesfully added",data:result})
}
const fetchdb= async(req,res)=>{
    const result=await userdata.find().toArray();
    res.send(result)
}
const salary=async(req,res)=>{
const result=await userdata.find({ "salary": { $gt: "30000" } }).toArray();
res.send(result)
}
const experience=async(req,res)=>{
    const result=await userdata.find({ "overallExp": { $gte: "2" } }).toArray();
    res.send(result)
    }
const graduated=async(req,res)=>{
    const result=await userdata.find({ "yearGrad": { $gt: "2015" }, "overallExp": { $gt: "1" } }).toArray();
        res.send(result)
        }
const updatesal=async(req,res)=>{
    const result=await userdata.updateMany( { "salary": { "$gt": "70000" } }, { $set: { "salary": "65000" } } )
            res.send(result)
                }

const dlt=async (req,res)=>{
    const result=await userdata.deleteMany({"lastCompany":{"$gt":'Y'}})
    res.send(result)
}
module.exports={addemp,fetchdb,salary,experience,graduated,updatesal,dlt}