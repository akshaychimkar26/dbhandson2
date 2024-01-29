const { MongoClient } = require("mongodb")
const url = "mongodb+srv://akshaychimkar26:pQQYLtKHANf4PcSD@handson1.3oaogxb.mongodb.net/?retryWrites=true&w=majority"
const mongoClient = new MongoClient(url)
try {
    mongoClient.connect()
    console.log("Server connected with our database")
}
catch (err) {
    console.log(err, "Error in making the connection with Database")
}

const database = mongoClient.db("Human_Resource")
module.exports = { database }