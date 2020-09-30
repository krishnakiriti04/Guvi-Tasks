var select = document.getElementById('country');

var promise = new Promise(function(resolve, reject) {
    var details;
    var request = new XMLHttpRequest();
    var url = "https://restcountries.eu/rest/v2/all"
    request.open('GET', url, true);
    request.send();
    request.onload = function() {
        details = JSON.parse(this.response);
        if (this.readyState === 4 && this.status === 200) {
            resolve(details);
        } else {
            reject("Something Wrong with API");
        }

    }
})


promise.then(function(data) {
        for (let i = 0; i < data.length; i++) {
            var opt = document.createElement('option');
            opt.text = data[i].name;
            opt.value = data[i].name;
            select.add(opt);
        }
        select.onchange = function() {
            getDetails(data);
        }
    })
    .catch(function(err) {
        console.log(err);
    });



function getDetails(data) {
    var selectedOption = select.options[select.selectedIndex].text;
    for (let i = 0; i < data.length; i++) {
        if (selectedOption === data[i].name) {
            document.getElementById('flag').src = data[i].flag;
            document.getElementById('capital').innerHTML = data[i].capital;
            document.getElementById('region').innerHTML = data[i].region;
            document.getElementById('latlng').innerHTML = `Latitude : ${data[i].latlng[0].toFixed(2)} Longitude : ${data[i].latlng[1].toFixed(2)}`;
            document.getElementById('code').innerHTML = `Code : ${data[i].currencies[0].code}`;
            document.getElementById('name').innerHTML = `Name : ${data[i].currencies[0].name}`;
            document.getElementById('symbol').innerHTML = `Symbol : ${data[i].currencies[0].symbol}`;
        }
    }
}