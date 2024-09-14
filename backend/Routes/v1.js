const app = require('express');
const studentcontroller = require('../controller/student.controller');

const route = app.Router();

route.get('/view-list', studentcontroller.userDetails);
route.post('/add-list', studentcontroller.addDetails);
route.post('/add-list/:id', studentcontroller.editDetails);

module.exports = route;