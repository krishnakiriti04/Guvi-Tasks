//window.onload = formData();
var userDataList = [];
var isEdit = false;
var selectedRow = null;

//function to GET data from the mock api
async function formData() {
    try {
        var api_data = await fetch("https://5f7b626200bd7400169097e6.mockapi.io/crud/v1/users");
        var api_json_data = await api_data.json();
        userDataList = api_json_data;
        populateTable(api_json_data);
    } catch (err) {
        console.log(err);
    }

}

//function to get selected radio button value
function selectedValue(radio_name) {
    var form_value;
    var radio_data = document.getElementsByName(radio_name);
    for (let i = 0; i < radio_data.length; i++) {
        if (radio_data[i].checked === true)
            form_value = radio_data[i].value;
    }
    return form_value;
}

//function to get selected checkboxes values as string
function selectedboxes(checkbox_name) {
    var box_value = [];
    var box_data = document.getElementsByName(checkbox_name);
    for (let i = 0; i < box_data.length; i++) {
        if (box_data[i].checked === true) {
            box_value.push(box_data[i].value);
        }
    }
    return box_value.join(",");
}


//function to POST and PUT data to mock api
async function postData() {
    try {
        var data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            country: document.getElementById('country').value,
            gender: selectedValue('Gender'),
            marital_status: selectedValue('Marital Status'),
            state: document.getElementById('state').value,
            city: document.getElementById('city').value,
            address: document.getElementById('addressline1').value + ',' + document.getElementById('addressline2').value,
            favfood: selectedboxes('Favourite Food'),
            favcolor: selectedboxes('Favourite Color'),
        };

        //check if password and confirm-password matches
        if (data.password === document.getElementById('confirm-password').value) {
            if (!isEdit) {
                //posting data to the mockapi
                var api_post_data = await fetch("https://5f7b626200bd7400169097e6.mockapi.io/crud/v1/users", {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "content-type": "application/json",
                    }
                });
            } else {
                //updating the data in mockapi
                var api_post_data = await fetch("https://5f7b626200bd7400169097e6.mockapi.io/crud/v1/users/" + selectedRow, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        "content-type": "application/json",
                    }
                });
                isEdit = false;
                selectedRow = null;
            }

            //on submitting the data all the fields will be set to empty
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("confirm-password").value = "";
            document.getElementById('country').value = "";
            document.getElementsByName('Gender').forEach(val => val.checked = false);
            document.getElementsByName('Marital Status').forEach(val => val.checked = false);
            document.getElementById('state').value = "";
            document.getElementById('city').value = "";
            document.getElementById('addressline1').value = "";
            document.getElementById('addressline2').value = "";
            document.getElementsByName('Favourite Food').forEach(val => val.checked = false);
            document.getElementsByName('Favourite Color').forEach(val => val.checked = false);

            //displaying data in the table along with edit and delete option
            formData();
        } else {
            alert('Password did not match');
        }

        //var fecth_data = await api_post_data.json();

    } catch (err) {
        console.log(err);
    }
}

//function to fill the table with user submitted data
function populateTable(arr_data) {
    document.getElementById('table_body').innerHTML = '';
    arr_data.forEach((value) => {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerHTML = value.name;
        var td2 = document.createElement('td');
        td2.innerHTML = value.gender
        var td3 = document.createElement('td');
        td3.innerHTML = value.marital_status
        var td4 = document.createElement('td');
        td4.innerHTML = value.email
        var td5 = document.createElement('td');
        td5.innerHTML = value.password
        var td6 = document.createElement('td');
        td6.innerHTML = value.country
        var td7 = document.createElement('td');
        td7.innerHTML = value.state
        var td8 = document.createElement('td');
        td8.innerHTML = value.city
        var td9 = document.createElement('td');
        td9.innerHTML = value.address;
        var td10 = document.createElement('td');
        td10.innerHTML = value.favfood;
        var td11 = document.createElement('td');
        td11.innerHTML = value.favcolor;

        var tdEdit = document.createElement("td");
        var editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.setAttribute("onclick", "getRowData(" + value.id + ")");
        editButton.setAttribute('class', 'btn btn-success')

        var tdDelete = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute('class', 'btn btn-danger')
        deleteButton.setAttribute("onclick", "deleteRow(" + value.id + ")");
        tdEdit.appendChild(editButton);
        tdDelete.appendChild(deleteButton);

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, tdEdit, tdDelete);
        tbody.append(tr);
    })
}

//on clicking edit function populate the values fields that were submitted earlier
function getRowData(row_id) {
    document.getElementById("name").value = userDataList[row_id - 1].name;
    document.getElementById("email").value = userDataList[row_id - 1].email;
    document.getElementById("password").value = userDataList[row_id - 1].password;
    document.getElementById('country').value = userDataList[row_id - 1].country;
    // document.getElementById('state').value = userDataList[row_id - 1].state;
    // document.getElementById('city').value = userDataList[row_id - 1].city;
    // document.getElementById('addressline1').value = userDataList[row_id - 1].address;
    isEdit = true;
    selectedRow = userDataList[row_id - 1].id; //as array indexing starts with 0 
}

//function to delete row from the table and mockapi
async function deleteRow(row_id) {
    var delete_data = await fetch('https://5f7b626200bd7400169097e6.mockapi.io/crud/v1/users/' + row_id, {
        method: 'DELETE',
    });
    //var delete_json_data = await delete_data.json();
    formData();
}
