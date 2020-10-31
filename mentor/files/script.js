//const mentors = require("../mentor");
let mentordata;
async function loaddata() {
    let dataraw = await fetch("http://localhost:5000/mentors");
    mentordata = await dataraw.json();
    let table = document.getElementById('mentordata');

    let tbody = document.createElement('tbody');

    mentordata.forEach((val) => {
        let tr = document.createElement('tr');
        let tdname = document.createElement('td');
        let tdemail = document.createElement('td');
        let tdsubject = document.createElement('td');
        let tdcompany = document.createElement('td');
        let addstudent = document.createElement('td');
        let getstudents = document.createElement('td');

        tdname.innerHTML = val.name;
        tdemail.innerHTML = val.email;
        tdsubject.innerHTML = val.subject;
        tdcompany.innerHTML = val.company;
        addstudent.innerHTML = `<button onclick="student(${val.id})" class="btn btn-success">Add Student</button>`
        getstudents.innerHTML = `<button onclick="getstudent('${val.name}')" class="btn btn-primary">All Students</button>`

        tr.append(tdname, tdemail, tdsubject, tdcompany, addstudent, getstudents);
        tbody.append(tr);
    })

    table.append(tbody);
}

loaddata();


async function addmentor() {
    document.getElementById('mentordiv').style.visibility = "hidden";

    let data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        company: document.getElementById('company').value
    }

    await fetch('http://localhost:5000/', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-Type': "application/json"
        }

    })
}


async function student(mentorid) {
    document.getElementById('studentform').style.visibility = "visible";
    let mentor = mentordata.find((mentor) => mentor.id === parseInt(mentorid));
    document.getElementById('mentor').value = mentor.name;
    document.getElementById('studentsubject').value = mentor.subject;
    console.log(mentor.name);
}

//function to post mentor data on form submit
async function addstudent() {
    let data = {
        name: document.getElementById('studentname').value,
        subject: document.getElementById('studentsubject').value,
        mentor: document.getElementById('mentor').value
    }

    await fetch('http://localhost:5000/students', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-Type': "application/json"
        }

    })
    document.getElementById('studentform').style.visibility = "hidden";
}


async function getstudent(name) {
    let rawdata = await fetch(`http://localhost:5000/students/${name}`);
    let studentdata = await rawdata.json();

    let ul = document.getElementById('students');
    ul.innerHTML = '';

    studentdata.forEach((student) => {
        let li = document.createElement('li');
        li.innerHTML = student.name;

        ul.append(li);
    });

    document.getElementById('studentdetailsdiv').style.visibility = (document.getElementById('studentdetailsdiv').style.visibility === 'visible') ? 'hidden' : 'visible';
}

function mentorform() {
    document.getElementById('mentordiv').style.visibility = "visible"
}