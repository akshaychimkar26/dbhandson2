const route = require("express").Router()

const { addData, addMultipleData, fetchData } = require("./controller/student")
const { addemp, fetchdb, salary, experience, graduated, updatesal, dlt } = require("./controller/employee")

route.post("/addemp", addemp)
route.post("/addData", addData)
route.post("/addMultipleData", addMultipleData)
route.get("/fetchData", fetchData)

route.get("/fetchdb", fetchdb)
route.get("/salary", salary)
route.get("/experience", experience)
route.get("/graduated", graduated)
route.post("/updatesal", updatesal)
route.get('/dlt', dlt)

module.exports = route