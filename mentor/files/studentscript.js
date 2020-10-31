let studentdata;
async function loadstudentdata() {
    let dataraw = await fetch("http://localhost:5000/students");
    studentdata = await dataraw.json();
    let table = document.getElementById('studentdata');

    let tbody = document.createElement('tbody');

    studentdata.forEach((val) => {
        let tr = document.createElement('tr');
        let tdname = document.createElement('td');
        let tdsubject = document.createElement('td');
        let tdmentor = document.createElement('td');
        let updatementor = document.createElement('td');

        tdname.innerHTML = val.name;
        tdsubject.innerHTML = val.subject;
        tdmentor.innerHTML = val.mentor;
        updatementor.innerHTML = `<button onclick="updatementor(${val.id})">Update Mentor</button>`;

        tr.append(tdname, tdsubject, tdmentor);
        tbody.append(tr);
    })

    table.append(tbody);
}

loadstudentdata();