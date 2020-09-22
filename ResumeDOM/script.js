var bound = create('div', 'boundary')
var ban = create('div', "banner")
var profile = createimg('image.jpg')
var dname = create('div', "name");

var h = create('h2')
h.innerHTML = "KRISHNA KIREETI"

var cnt = create('div', 'contact');
var hr = create('hr');
var details = create('div', "details");
var pcntct = create('p');
pcntct.innerHTML = "Hyderabad | +91 7416282658 | krishnakiriti.mamidi@gmail.com | www.linkedin.com/in/krishna-kireeti-mamidi/"

var h2 = create('h2');
h2.innerHTML = `<i style="font-size:24px" class="fas fa-bullseye"></i> Carrer Obective`

var p = create('p');
p.innerHTML = "To pursue a challenging career and work for a esteemed organization where I can contribute my skills for both my personal and the organizational growth."

var h22 = create('h2');
h22.innerHTML = `<i style='font-size:24px' class='fas fa-laptop-code'></i> Technical Skills`;

var ul = create('ul', 'skills');
var li1 = createli(ul, 6);

var labelC = createLabel('Cprog', 'C programming');
var labelcshp = createLabel('csharp', 'C #');
var labeljs = createLabel("js", "Java Script");
var labelhtml = createLabel('html', 'HTML');
var labelcss = createLabel('css', "CSS");
var labelsql = createLabel('sql', "SQL");
var progressC = createProgress(80, 'Cprog');
var progressCshp = createProgress(50, 'csharp')
var progressJs = createProgress(75, 'js');
var progressHtml = createProgress(60, 'html');
var progressCss = createProgress(50, 'css');
var progressSql = createProgress(40, 'sql');

var h23 = create('h2');
h23.innerHTML = `<i style='font-size:24px' class='fas'>&#xf0b1;</i> Work Experience`;

var h41 = create('h4');
h41.innerHTML = `Systems Engineer, Tata Consultancy Services (21.01.2020-Till Date)`;

var ul2 = create('ul');
var li2 = createli(ul2, 4);
li2[0].innerHTML = "Working on POC on integrating NVDLA with RISC-V SOC chip."
li2[1].innerHTML = "Learning Python scripting along with C and Linux concepts."
li2[2].innerHTML = "Learning competetive programming in Hackrerrank."
li2[3].innerHTML = "Worked on a Poc on emulating the RISC-V processor without the need of actual hardware."

var h42 = create('h4');
h42.innerHTML = `Systems Engineer, Tata Consultancy Services (01.08.2019-20.01.20)`;

var ul3 = create('ul');
var li3 = createli(ul3, 3);
li3[0].innerHTML = "Learned ASIC design flow and physical design flow."
li3[1].innerHTML = "Implemented PnR flow on two 28nm block level designs."
li3[2].innerHTML = "Underwent training in Static Timing Analysis."

var h43 = create('h4');
h43.innerHTML = `Application Support Engineer, Tata Consultancy Services (26.10.2017-31.07.19)`;

var ul4 = create('ul');
var li4 = createli(ul4, 3);
li4[0].innerHTML = "Responsible for the application support of the client application which is liable for payroll and billing cycle."
li4[1].innerHTML = "Assisted in automating few standard procedures to reduce and make the daily workload efficient."
li4[2].innerHTML = "Worked closely with test, development and requirements team members to analyse, investigate and resolve Help Desk tickets submitted by end users."


var h24 = create('h2');
h24.innerHTML = `<i style='font-size:24px' class='fas'>&#xf19d;</i> Education`;

var ul5 = create('ul');
var li5 = createli(ul5, 3);
li5[0].innerHTML = `<strong>Bachelor of Technology</strong> in the field of Electronics & Instrumentation Engineering in year 2017 with 83.2% from VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad.`
li5[1].innerHTML = `<strong>Intermediate </strong>in MPC in the year 2013 with 94.4% from Sri Chaitanya Junior College, Vijayawada.`;
li5[2].innerHTML = ` <strong>X</strong> class in the year 2011 with 89.3% from Ravindra Bharathi Public School, Vijayawada.`;

var h25 = create('h2');
h25.innerHTML = `<i style='font-size:24px' class='fas'>&#xf406;</i> Personal Strengths`;

var ul6 = create('ul');
var li6 = createli(ul6, 4);
li6[0].innerHTML = `Great team player, quick learner and self-motivated individual.`
li6[1].innerHTML = `Can communicate and interact effectively with peers from diverse teams to solve common problems.`;
li6[2].innerHTML = `Have good analytical and problem-solving skills.`;
li6[3].innerHTML = ` Love to make my surrounding environment healthy and productive by motivating members around me.`;

document.body.append(bound);
bound.append(ban, cnt, hr, details);
ban.append(profile, dname);
dname.appendChild(h);
cnt.append(pcntct);
details.append(h2, p, h22, ul, h23, h41, ul2, h42, ul3, h43, ul4, h24, ul5, h25, ul6);
li1[0].append(labelC, progressC);
li1[1].append(labelcshp, progressCshp);
li1[2].append(labeljs, progressJs);
li1[3].append(labelhtml, progressHtml);
li1[4].append(labelcss, progressCss);
li1[5].append(labelsql, progressSql);


function create(element, classname) {
    var t = document.createElement(element);
    if (classname)
        t.setAttribute('class', classname);

    return t;
}

function createimg(source) {
    var i = document.createElement('img');
    i.setAttribute('src', source);
    return i;
}

// function createIcons(classname) {
//     var q = document.createElement('i');
//     q.setAttribute('class', 'fa ' + classname);
//     q.setAttribute('style', 'font-size : 24px');
//     return q.toString;
// }

function createli(elem, num) {
    var arr = []
    for (let i = 0; i < num; i++) {
        arr.push(document.createElement('li'));
        elem.appendChild(arr[i]);
    }
    return arr;
}

function createLabel(forname, text) {
    var a = document.createElement('label');
    a.setAttribute('for', forname);
    a.innerHTML = text;
    return a;
}

function createProgress(val, idname) {
    var d = document.createElement('progress');
    d.id = idname;
    d.setAttribute('value', val);
    d.setAttribute('class', 'progressbar');
    d.setAttribute('max', 100);
    return d;
}