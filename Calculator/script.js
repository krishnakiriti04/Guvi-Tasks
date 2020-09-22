var div1 = create('div', 'container-fluid mt-5 ml-5 p-5');

let bg = document.querySelector('body');
//bg.style = 'background-image: linear-gradient(to right, #eec5dd, #e5c3e2, #dac1e6, #cdc0ea, #bec0ec, #afc5f3, #9ecbf7, #8cd0f7, #7bdcf5, #76e6ec, #84eedc, #9ff4c8);';


var divarr = createElements('div', 'offset-md-2 offset-sm-1 row text-md-center text-sm-left h4 mb-0', 6);

var input = create('input', 'col-8 border-3 border-light text-right mt-5 mb-1');
input.setAttribute('type', 'text');
input.disabled = true;
input.setAttribute('style', `line-height:60px; background-color:#DAE0E2; font-family: 'Comfortaa', cursive;`);
input.id = "display";

var btnnumbers = createElements('button', 'btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2', 10);
btnnumbers[0].setAttribute('onclick', "appendNumber(0)");
btnnumbers[1].setAttribute('onclick', `appendNumber(1)`);
btnnumbers[2].setAttribute('onclick', `appendNumber(2)`);
btnnumbers[3].setAttribute('onclick', `appendNumber(3)`);
btnnumbers[4].setAttribute('onclick', `appendNumber(4)`);
btnnumbers[5].setAttribute('onclick', `appendNumber(5)`);
btnnumbers[6].setAttribute('onclick', `appendNumber(6)`);
btnnumbers[7].setAttribute('onclick', `appendNumber(7)`);
btnnumbers[8].setAttribute('onclick', `appendNumber(8)`);
btnnumbers[9].setAttribute('onclick', `appendNumber(9)`);

var add = createButton('+', '+', `appendNumber('+')`);
var sub = createButton('-', '-', `appendNumber('-')`);
var mul = createButton('x', 'X', `appendNumber('*')`);
var division = createButton('&#247;', '/', `appendNumber('/')`);
var square = createButton('x<sup>2</sup>', 'square', 'power2()')
var equals = createButton('=', '=', 'equate()');
var root = createButton('&radic;', 'root', 'sqrRoot()');
var dot = createButton('.', '.', `appendNumber('.')`);
var clear = createButton('c', 'c', 'clearScreen()');
var cube = createButton('x<sup>3</sup>', 'cube', 'power3()')

document.body.append(div1);
div1.append(divarr[0], divarr[1], divarr[2], divarr[3], divarr[4], divarr[5]);
divarr[0].append(input);
divarr[1].append(square, root, clear, division);
divarr[2].append(btnnumbers[7], btnnumbers[8], btnnumbers[9], mul);
divarr[3].append(btnnumbers[4], btnnumbers[5], btnnumbers[6], sub);
divarr[4].append(btnnumbers[1], btnnumbers[2], btnnumbers[3], add);
divarr[5].append(cube, btnnumbers[0], dot, equals);

function create(element, classname) {
    var t = document.createElement(element);
    t.setAttribute('class', classname);
    return t;
}

function createElements(element, classname, num) {
    let elem = [];
    for (let i = 0; i < num; i++) {
        var b = document.createElement(element);
        b.setAttribute('class', classname);
        b.setAttribute('style', `font-family: 'Comfortaa', cursive;`);
        if (element === 'button') {
            b.setAttribute('value', i);
            b.innerHTML = i;
        }
        elem.push(b);
    }
    return elem;
}

function createButton(txt, val, fn) {
    let a = document.createElement('button');
    a.setAttribute('class', 'btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2');
    a.setAttribute('value', val);
    a.innerHTML = txt;
    a.setAttribute('onclick', fn);
    return a;
}


function appendNumber(val) {
    input.value += val;
}


function equate() {
    input.value = Number.isInteger(eval(input.value)) ? eval(input.value) : eval(input.value).toFixed(2);
}

function sqrRoot() {
    if (input.value) {
        let val = parseFloat(eval(input.value))
        input.value = Math.sqrt(val).toFixed(2);
    }
}

function power3() {
    if (input.value) {
        let val = parseFloat(eval(input.value))
        input.value = Math.pow(val, 3).toFixed(2);
    }
}

function power2() {
    if (input.value) {
        let val = parseFloat(eval(input.value))
        input.value = Math.pow(val, 2).toFixed(2);
    }
}

function clearScreen() {
    input.value = "";
}