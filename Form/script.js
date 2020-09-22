var container = document.createElement('div')
container.setAttribute('class', 'container p-4');

var heading = document.createElement('div');
heading.setAttribute('class', 'h2');
heading.innerHTML = "HTML FORM"
heading.style.textAlign = "center";

var form = document.createElement('form');
form.setAttribute('class', 'p-5')

var fname = createFormElements('First Name', 'text', 'fname');
var lname = createFormElements('Last Name ', 'text', 'lname');
var address = createFormElements('Address ', 'textarea', 'address');
var pincode = createFormElements('Pincode ', 'number', 'pin');
var gender = createRadio();
var favFood = createMultiSelect();
var state = createState();
var country = createCountry();
var submit = createButton();

var divtable = document.createElement('div')
divtable.setAttribute('class', 'row');

var table = document.createElement('table');
table.setAttribute('class', 'table mt-5');

var thead = document.createElement('thead');
var tbody = document.createElement('tbody');

var tr1 = document.createElement('tr');

var th1 = document.createElement('th');
th1.innerHTML = 'First Name';
var th2 = document.createElement('th');
th2.innerHTML = 'Last Name';
var th3 = document.createElement('th');
th3.innerHTML = 'Address';
var th4 = document.createElement('th');
th4.innerHTML = 'Pincode';
var th5 = document.createElement('th');
th5.innerHTML = 'Gender';
var th6 = document.createElement('th');
th6.innerHTML = 'Favourite Food';
var th7 = document.createElement('th');
th7.innerHTML = 'State';
var th8 = document.createElement('th');
th8.innerHTML = 'Country';


document.body.append(container);
container.append(heading, form, divtable);
divtable.append(table);
table.append(thead, tbody);
thead.append(tr1);
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8);
form.append(fname, lname, address, pincode, gender, favFood, state, country, submit)


function createButton() {
    var d = document.createElement('div');
    d.setAttribute('class', 'row offset-6');

    var btn = document.createElement('button');
    btn.innerHTML = 'Submit';
    btn.type = 'button'
    btn.setAttribute('class', 'btn btn-info text-center mt-5')
    btn.onclick = action;

    d.append(btn);
    return d;
}


function createFormElements(lbltxt, typ, idname) {
    var d = document.createElement('div');
    d.setAttribute('class', 'form-group row');
    var lbl = document.createElement('label');
    lbl.classList.add('label', 'col-4', 'col-form-label');
    lbl.innerHTML = lbltxt;
    var input = document.createElement('input');
    input.setAttribute('type', typ);
    input.id = idname;
    input.placeholder = lbltxt;
    input.setAttribute('class', 'form-control col-6')
    input.required = true;
    d.append(lbl, input);
    return d;
}

function createRadio() {
    var fieldset = document.createElement('fieldset');
    fieldset.setAttribute('class', 'form-group');

    var d = document.createElement('div');
    d.setAttribute('class', 'row');

    var legend = document.createElement('legend');
    legend.setAttribute('class', 'col-form-label col-4')
    legend.innerHTML = 'Gender'

    var d1 = document.createElement('div');
    d1.setAttribute('class', 'col-6 pl-1');

    var d2 = document.createElement('div');
    d2.setAttribute('class', 'form-check');

    var male = document.createElement('label');
    male.setAttribute('for', 'Male');
    male.setAttribute('class', 'form-check-label')
    male.innerHTML = 'Male';
    var radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('class', 'form-check-input');
    radio1.checked = true;
    radio1.id = 'Male';
    radio1.value = 'Male'
    radio1.name = 'gender';

    var d3 = document.createElement('div');
    d3.setAttribute('class', 'form-check');

    var female = document.createElement('label');
    female.setAttribute('for', 'Female');
    female.innerHTML = 'Female'
    var radio2 = document.createElement('input');
    radio2.setAttribute('class', 'form-check-input');
    radio2.setAttribute('type', 'radio');
    radio2.id = 'Female';
    radio2.value = 'Female'
    radio2.name = 'gender';

    fieldset.append(d)
    d.append(legend, d1);
    d1.append(d2, d3);
    d2.append(radio1, male);
    d3.append(radio2, female);



    return fieldset;
}


function createMultiSelect() {
    var d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

    var label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "Favourite Food"

    var select = document.createElement('select');
    select.multiple = true;
    select.id = 'food'
    select.setAttribute('class', 'form-control col-6')
    var opt1 = new Option('Pizza', 'Pizza');

    var opt2 = new Option('Burger', 'Burger');
    var opt3 = new Option('Pasta', 'Pasta');
    var opt4 = new Option('Noodles', 'Noodles');
    var opt5 = new Option('Biryani', 'Biryani');
    opt2.selected = true;

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);

    d.append(label, select);
    return d;
}

function createState() {
    var d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

    var label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "State";

    var select = document.createElement('select');
    select.id = 'state'
    select.setAttribute('class', 'form-control col-6')
    var opt1 = new Option('Andhra Pradesh', 'Andhra Pradesh');
    opt1.selected = true;
    var opt2 = new Option('Karnataka', 'Karnataka');
    var opt3 = new Option('Tamilnadu', 'Tamilnadu');
    var opt4 = new Option('Kerala', 'Kerala');
    var opt5 = new Option('Madhya Pradesh', 'Madhya Pradesh');
    var opt6 = new Option('Haryana', 'Haryana');
    var opt7 = new Option('Gujarat', 'Gujarath');

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);
    select.add(opt6);
    select.add(opt7);

    d.append(label, select);
    return d;
}

function createCountry() {
    var d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

    var label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "Country";

    var select = document.createElement('select');
    select.setAttribute('class', 'form-control col-6')
    select.id = 'country'
    var opt1 = new Option('India', 'India');
    opt1.selected = true;
    var opt2 = new Option('USA', 'USA');
    var opt3 = new Option('Australia', 'Australia');
    var opt4 = new Option('South Africa', 'South Africa');
    var opt5 = new Option('New Zealand', 'New Zealand');
    var opt6 = new Option('England', 'England');
    var opt7 = new Option('West Indies', 'West Indies');

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);
    select.add(opt6);
    select.add(opt7);

    d.append(label, select);
    return d;
}



function action() {
    var fn = document.getElementById('fname').value;
    var ln = document.getElementById('lname').value;
    var addr = document.getElementById('address').value;
    var pcode = document.getElementById('pin').value;

    if (!fn) {
        alert('Please Enter First Name');
    } else if (!ln) {
        alert('Please Enter Last Name');
    } else if (!addr) {
        alert('Please Enter Address');
    } else if (!pcode) {
        alert('Please Enter pin code');
    } else {

        let tablebody = document.querySelector('tbody');
        var trow2 = tablebody.insertRow(0);
        var cell1 = trow2.insertCell(0);
        var cell2 = trow2.insertCell(1);
        var cell3 = trow2.insertCell(2);
        var cell4 = trow2.insertCell(3);
        var cell5 = trow2.insertCell(4);
        var cell6 = trow2.insertCell(5);
        var cell7 = trow2.insertCell(6);
        var cell8 = trow2.insertCell(7);
        cell1.innerHTML = fn;
        cell2.innerHTML = ln;
        cell3.innerHTML = addr;
        cell4.innerHTML = pcode;

        var data = document.getElementsByName('gender');
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === true)
                cell5.innerHTML = data[i].value;
        }

        var foodvalues = document.getElementById('food');
        cell6.innerHTML = [...foodvalues.options].filter((val) => val.selected).map((opt) => opt.value);

        cell7.innerHTML = document.getElementById('state').value;
        cell8.innerHTML = document.getElementById('country').value;

        alert('Thanks for submitting the form!!')
    }


}