var div = document.createElement('div');
div.setAttribute('class', 'container');

var div1 = document.createElement('div');
div1.setAttribute('class', 'boundary-1 row');

var div2 = document.createElement('div');
div2.setAttribute('class', 'boundary-2 row');

var num = document.createElement('div');
num.setAttribute('class', 'display');

var text = document.createElement('input');
text.setAttribute('class', 'input')
text.setAttribute('type', 'text');

var btnwrap = document.createElement('div');
var btn = document.createElement('button');
btn.setAttribute('class', 'btn btn-info button');
btn.setAttribute('onclick', 'generate()');
btn.innerHTML = "Click to generate";

var heading1 = document.createElement('div');
heading1.innerHTML = "Random Number Generation"
heading1.setAttribute('class', 'heading1')

var heading2 = document.createElement('div');
var u2 = document.createElement('p');
u2.innerHTML = "DoB calculation"
heading2.setAttribute('class', 'heading2 row')

var dob = document.createElement('input');
dob.type = "date";
dob.id = "dob";
dob.setAttribute('onchange', 'calcuatedob()')

var dt = document.createElement('div');
dt.setAttribute('class', 'dt')

var years = createInput('year', 'Years : ');
var months = createInput('month', 'Months : ');
var days = createInput('day', 'Days : ');
var hours = createInput('hours', 'Hours : ');
var minutes = createInput('minutes', 'Minutes : ');
var seconds = createInput('seconds', 'Seconds : ');
var milliseconds = createInput('milliseconds', 'Milliseconds : ');

document.body.append(div)
div.append(div1, div2);
div1.append(heading1, num, btnwrap);
div2.append(heading2, dt, dob);
dt.append(years, months, days, hours, minutes, seconds, milliseconds)
heading2.append(u2);
num.append(text);
btnwrap.append(btn);

function createInput(inputid, lbltxt) {
    var d = document.createElement('div');
    d.setAttribute('class', 'row')
    var l = document.createElement('label')
    l.for = inputid;
    l.innerHTML = lbltxt;
    l.setAttribute('class', 'col-6')
    var t = document.createElement('input')
    t.type = "text";
    t.id = inputid;
    t.setAttribute('class', 'ip col-6')
    d.append(l, t);
    return d;
}




function generate() {
    var min = 10000000;
    var max = 99999999;

    function getRandom(min, max) {
        var temp = Math.floor(Math.random() * (max - min) + min);
        var res = temp.toString().split("");
        if (new Set(res).size != res.length) {
            getRandom(min, max);
        } else {
            text.value = parseInt(res.join(""));
        }
    }
    getRandom(min, max);

}


function calcuatedob() {
    var day = 24 * 60 * 60 * 1000;
    var d = new Date(dob.value);
    var dd = new Date();
    var s = Math.abs(dd - d);
    document.getElementById('year').value = dd.getFullYear() - d.getFullYear();
    document.getElementById('month').value = dd.getMonth() - d.getMonth() + (12 * (dd.getFullYear() - d.getFullYear()));
    document.getElementById('day').value = Math.round(Math.abs((dd - d) / day));
    document.getElementById('hours').value = Math.floor(s / (1000 * 60 * 60));
    document.getElementById('minutes').value = Math.floor(s / (1000 * 60));
    document.getElementById('seconds').value = Math.floor(s / (1000));
    document.getElementById('milliseconds').value = s;

}