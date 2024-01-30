const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
const url = "mongodb+srv://akshaychimkar26:pQQYLtKHANf4PcSD@handson1.3oaogxb.mongodb.net/Human_Resource?retryWrites=true&w=majority"
const connection = async () => {
    try {
        await mongoose.connect(url)
        console.log("server connected with the database")
    }
    catch (err) {
        console.log(err, "error connection")
    }
}
module.exports = connection;