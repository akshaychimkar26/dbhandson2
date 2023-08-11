const {MongoClient}=require("mongodb")
const url="mongodb://0.0.0.0:27017/"
const mongoClient=new MongoClient(url)
try{
    mongoClient.connect()
    console.log("Server connected with our database")
}
catch(err){
console.log(err,"Error in making the connection with Database")
}

const database=mongoClient.db("testing_database")
module.exports={database}