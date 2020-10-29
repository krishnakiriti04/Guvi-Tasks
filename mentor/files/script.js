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

        tdname.innerHTML = val.name;
        tdemail.innerHTML = val.email;
        tdsubject.innerHTML = val.subject;
        tdcompany.innerHTML = val.company;
        addstudent.innerHTML = `<button onclick="student(${val.id})" class="btn btn-success")>Add Student</button>`

        tr.append(tdname, tdemail, tdsubject, tdcompany, addstudent);
        tbody.append(tr);
    })

    table.append(tbody);
}

loaddata();

let studentdata;
async function loadstudentdata() {
    let dataraw = await fetch("http://localhost:5000/students");
    studentdata = await dataraw.json();
    let table = document.getElementById('studentdata');

    let tbody = document.createElement('tbody');

    studentdata.forEach((val) => {
        let tr = document.createElement('tr');
        let tdname = document.createElement('td');
        let tdemail = document.createElement('td');
        let tdsubject = document.createElement('td');
        let tdcompany = document.createElement('td');

        tdname.innerHTML = val.name;
        tdemail.innerHTML = val.email;
        tdsubject.innerHTML = val.subject;
        tdcompany.innerHTML = val.company;

        tr.append(tdname, tdemail, tdsubject, tdcompany);
        tbody.append(tr);
    })

    table.append(tbody);
}

//loadstudentdata();

async function addmentor() {
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


async function student(id) {
    document.getElementById('studentform').style.visibility = "visible";
    let mentor = mentordata.find((mentor) => mentor.id === parseInt(id));
    document.getElementById('mentor').value = mentor.name;
    console.log(mentor.name);
}

async function addstudent() {
    let data = {
        name: document.getElementById('studentname').value,
        subject: document.getElementById('subject').value,
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