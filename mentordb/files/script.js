let mentordata;
async function loaddata() {
    let dataraw = await fetch("http://localhost:4000/api/mentor");
    mentordata = await dataraw.json();
    let table = document.getElementById('mentordata');

    let tbody = document.createElement('tbody');

    mentordata.forEach((val) => {
        let tr = document.createElement('tr');
        let tdname = document.createElement('td');
        let tdemail = document.createElement('td');
        let tdsubject = document.createElement('td');
        let tdcompany = document.createElement('td');
        let deletementor = document.createElement('td');
        let addstudent = document.createElement('td');
        let getstudents = document.createElement('td');

        tdname.innerHTML = val.name;
        tdemail.innerHTML = val.email;
        tdsubject.innerHTML = val.subject;
        tdcompany.innerHTML = val.company;
        deletementor.innerHTML = `<i class="fa fa-trash" style="font-size:24px; color:red" onclick="deletementor('${val._id}')"></i>`
        addstudent.innerHTML = `<i class="fa fa-plus" style="font-size:24px; color:green" onclick="student('${val._id}')"></i>`
        getstudents.innerHTML = `<i class="fa fa-list" style="font-size:24px; color:blue" onclick="getstudent('${val.name}')"></i>`

        tr.append(tdname, tdemail, tdsubject, tdcompany, deletementor, addstudent, getstudents);
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

    await fetch('http://localhost:4000/api/mentor', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-Type': "application/json"
        }

    })

    location.reload();
}


async function student(mentorid) {
    document.getElementById('studentform').style.visibility = "visible";
    let mentor = mentordata.find((mentor) => mentor._id == mentorid);
    document.getElementById('mentor').value = mentor.name;
    document.getElementById('studentsubject').value = mentor.subject;
    //   console.log(mentor);
}

//function to post mentor data on form submit
async function addstudent() {
    let data = {
        name: document.getElementById('studentname').value,
        subject: document.getElementById('studentsubject').value,
        mentor: document.getElementById('mentor').value
    }

    await fetch('http://localhost:4000/api/student', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-Type': "application/json"
        }

    })
    document.getElementById('studentform').style.visibility = "hidden";
}

//delete mentor
async function deletementor(mentorid) {
    try {
        let res = await fetch(`http://localhost:4000/api/mentor/${mentorid}`, {
            method: "DELETE"
                // headers: {
                //     "Content-type": "application/json"
                // }
        })
        let resdata = await console.log("Deleted mentor");
        location.reload();

    } catch (err) {
        console.log('Issue with connection:' + err)
    }
}

async function getstudent(mentorname) {
    try {
        let rawdata = await fetch(`http://localhost:4000/api/student/${mentorname}`);
        let studentdata = await rawdata.json();

        let tr = document.getElementById(mentorname);


        let ul = document.getElementById('students');
        ul.innerHTML = '';

        studentdata.forEach((student) => {
            let li = document.createElement('li');
            li.innerHTML = student.name;

            ul.append(li);
        });
    } catch (err) {
        console.log(`No student found`)
    }
    document.getElementById('studentdetailsdiv').style.visibility = (document.getElementById('studentdetailsdiv').style.visibility === 'visible') ? 'hidden' : 'visible';
}

function mentorform() {
    document.getElementById('mentordiv').style.visibility = "visible"
}