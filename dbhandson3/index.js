const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const url = "mongodb://0.0.0.0:27017/";
const connection=require("./config/db")
const express = require("express");
const route = require("./Routes/route");
const app = express();

const employee = require("./projectmodel/projectstructure");

app.use(express.json());

app.use("/api", route);

app.get("/", (req, res) => {
    res.send({ msg: "this is a testing phase" });
});

app.listen(5800, async () => {
    try {
        await connection(url);
        console.log("server running on port 5800");
    } catch (err) {
        console.log(err, "error occurred in running");
    }
});