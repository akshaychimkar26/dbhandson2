const route = require('express').Router();
const { insertDetails, fetchdata, deletedata, salary, overallExp, graduate, setsalary } = require('../Controller/employee');

route.post('/insert', insertDetails);
route.get('/fetch', fetchdata);
route.get('/delete', deletedata);
route.get('/salary', salary);
route.get('/overallExp', overallExp);
route.get('/graduate', graduate);
route.post('/setsalary', setsalary);

module.exports = route;