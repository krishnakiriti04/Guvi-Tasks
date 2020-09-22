var request = new XMLHttpRequest()
var url = "https://restcountries.eu/rest/v2/all"

request.open('GET', url, true)
request.send()

var details;

request.onload = function() {
    if (request.readyState == 4 && request.status == 200) {
        var countries = JSON.parse(this.response)
        details = countries.map((val) => {
            var obj = { "name": val.name }
            return obj;
        })
        insert(details);
    } else
        alert("Status: " + request.status + " Message: " + request.statusText);
}


function insert(details) {
    var select = document.querySelector('#country');
    for (let i = 0; i < details.length; i++) {
        var option = document.createElement("option")
        option.text = details[i]["name"];
        option.value = i;
        select.add(option);
    }
}

function popup() {
    alert('Thanks for Submitting the form');
}