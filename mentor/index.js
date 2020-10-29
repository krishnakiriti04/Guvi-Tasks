const path = require('path');
const fs = require('fs');
const express = require('express');
const mentors = require('./mentor.js');
const bodyParser = require('body-parser');
const cors = require("cors");
const students = require('./student.js')

//express init
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'files')));


//api endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'index.html'));
})


//add mentor api
app.post('/', (req, res) => {
    req.body.id = mentors.length + 1;
    mentors.push(req.body);
    res.sendFile(path.join(__dirname, 'files', 'index.html'));
    res.json("Mentor added" + mentors);
})


//mentors data api to load main page
app.get('/mentors', (req, res) => {
    res.json(mentors);
})

//students data api to load main page
app.get('/students', (req, res) => {
    //res.json(students);
    res.sendFile(path.join(__dirname, 'files', 'student.html'));

})

app.post('/students', (req, res) => {
    req.body.id = students.length + 1;
    students.push(req.body);
    res.json(students);
})

app.listen(5000);