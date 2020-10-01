var boundary = document.createElement('div');
boundary.classList.add('container');

var row = document.createElement('div');
row.setAttribute('class', 'row')

document.body.append(boundary);
boundary.append(row);


async function getData() {
    try {
        var rest_countries = await fetch("https://restcountries.eu/rest/v2/all");
        var jsondata = await rest_countries.json();
        //    console.log(jsondata[0]);

        jsondata.forEach((element, index) => {
            var card = document.createElement('div');
            card.classList.add('card', 'col-md-4', 'col-sm-12', 'my-2');

            var header = document.createElement('h6')
            header.setAttribute('class', 'card-header text-center bg-dark text-white')
            header.innerHTML = element.name;

            var cardbody = document.createElement('div');
            cardbody.classList.add('cardbody', 'card-body', 'text-center', 'bg-light');

            var img = document.createElement('img');
            img.classList.add('card-img', 'mb-2');
            img.src = element.flag;
            img.height = 150;
            img.width = 150;

            var capital = document.createElement('h6');
            capital.setAttribute('class', 'card-text text-center');
            capital.innerHTML = 'Capital : ' + element.capital;

            var region = document.createElement('h6');
            region.setAttribute('class', 'card-text text-center');
            region.innerHTML = 'Region : ' + element.region;

            var code = document.createElement('h6');
            code.setAttribute('class', 'card-text text-center');
            code.innerHTML = 'Country-code : ' + element.alpha3Code;

            var climate = document.createElement('h6');
            climate.setAttribute('class', 'card-text text-center mt-3');

            var btn = document.createElement('button');
            btn.setAttribute('class', 'btn btn-info');
            btn.innerHTML = 'Click for Weather';
            btn.id = "btn-" + index;
            btn.onclick = async function() {
                try {
                    var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${element.latlng[0]}&lon=${element.latlng[1]}&appid=1b8219db0924bc0ab5c34aa34a8704e2`);
                    var weatherdata = await data.json();
                    // console.log(element.latlng + ' : ' + weatherdata.coord.lon, weatherdata.coord.lat)
                    climate.innerHTML = (weatherdata.main.temp - 273.15).toFixed(2) + "&#176; C , " + weatherdata['weather'][0].description
                } catch (err) {
                    console.log(err);
                }

            }

            cardbody.append(img, capital, region, code, btn, climate)
            card.append(header, cardbody);
            row.append(card);
        });
    } catch (err) {
        console.log(err);
    }

}

getData()
