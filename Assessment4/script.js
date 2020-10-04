//creating a div with container class
var container = document.createElement("div");
container.setAttribute('class', 'container');

//nav element creation 
var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light')

//anchor tag for brand and logo
var a1 = document.createElement('a');
a1.setAttribute('class', 'navbar-brand')
a1.href = "#";

//logo addition to nav
var brand = document.createElement('img');
brand.src = 'logo.png';
brand.width = "30";
brand.height = "30";
brand.setAttribute('class', 'd-inline-block align-top')

//toggler for shriking menu in small screens
var toggler = document.createElement('button');
toggler.type = 'button';
toggler.setAttribute('class', 'navbar-toggler')
toggler.setAttribute('data-target', "#navbarNavAltMarkup")
toggler.setAttribute('aria-controls', "navbarNavAltMarkup");
toggler.setAttribute('aria-label', "Toggle navigation");
toggler.setAttribute('aria-expanded', "false");
toggler.setAttribute('data-toggle', 'collapse');

var span = document.createElement('span');
span.setAttribute('class', 'navbar-toggler-icon')

//items that needs to be collapsed on entering small screens
var listDiv = document.createElement('div');
listDiv.setAttribute('class', 'collapse navbar-collapse');
listDiv.id = 'navbarNavAltMarkup';

//divtag for navbar
var listItemsDiv = document.createElement('div');
listItemsDiv.setAttribute('class', 'navbar-nav');

//array containing news sections
var arr = ['home', 'world', 'politics', 'magazine', 'technology', 'science', 'health', 'sports', 'arts', 'fashion', 'food', 'travel'];

//creating menu items
for (let i = 0; i < arr.length; i++) {
    var t = document.createElement('button');
    if (i == 0) {
        t.setAttribute('class', 'nav-item nav-link list-items bg-light active');
    } else {
        t.setAttribute('class', 'nav-item nav-link list-items bg-light');
    }
    t.setAttribute('onclick', 'getData(' + arr[i] + ')');
    t.id = arr[i];
    t.innerHTML = arr[i].toUpperCase();
    listItemsDiv.append(t);
}

//creating a row to create a columns inside this row class for text and image
var divCard = document.createElement('div');
divCard.setAttribute('class', 'row')


//appending all the items together
listDiv.append(listItemsDiv);
toggler.append(span);
a1.append(brand);
nav.append(a1, toggler, listDiv);
container.append(nav, divCard);
document.body.append(container);

//on page load display home page
window.onload = getData(document.getElementById('home'));

//function to fetch api data based on the section selected from the nav-bar
async function getData(e) {
    try {
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + e.id + '.json?api-key=kK0UVivxKRmeiFiTW4y5yt0PkNEUBok4';
        var rawdata = await fetch(url);
        var jsondata = await rawdata.json();

        if (rawdata.ok) {
            createPage(jsondata);
        } else {
            throw new error(rawdata.message)
        }

    } catch (err) {
        console.log(err);
    }
}


//function to create a page based on the section data we got from getData() function
function createPage(data) {

    //everytime page loads old data will be replaced with empty data
    divCard.innerHTML = "";

    for (let i = 0; i < data.results.length; i++) {
        //div tag for card
        if (data.results[i].multimedia == null || data.results[i].multimedia.length === 0) {
            continue;
        } else {
            var newsCard = document.createElement('div');
            newsCard.setAttribute('class', 'card col-md-12 col-sm-12 my-2')

            //div tag for row    
            var card_row = document.createElement('div')
            card_row.setAttribute('class', 'row');

            //div tag for card body
            var card_body = document.createElement('div')
            card_body.setAttribute('class', 'col-md-8 col-sm-12');

            //creating element to display section name in card
            var h51 = document.createElement('h5');
            h51.setAttribute('class', 'text-info head mb-3')
            var text_case = data.results[i].section;
            h51.innerHTML = text_case[0].toUpperCase() + text_case.substr(1);

            //creating element to display section title 
            var title = document.createElement('h4');
            title.setAttribute('class', 'card-title title')
            title.innerHTML = data.results[i].title;

            //creating element to display section created date
            var date = document.createElement('h5');
            date.setAttribute('class', 'card-subtitle date text-secondary mb-3')
            var [mth, dt] = getDate(data.results[i].created_date);
            date.innerHTML = mth + ' ' + dt;

            //creating element to display section cover photo 
            var card_img = document.createElement('img')
            card_img.src = getImage(data.results[i].multimedia);
            card_img.setAttribute('class', 'img-fluid card-img col-md-4 col-sm-12 border border-light');

            //creating element to display section abstract
            var abstract = document.createElement('div');
            abstract.setAttribute('class', 'card-text abtract mb-2');
            abstract.innerHTML = data.results[i].abstract;

            //creating element to continue reading the section in a different tab 
            var anchor_link = document.createElement('a');
            anchor_link.setAttribute('class', 'card-link text-primary');
            anchor_link.innerHTML = 'Continue Reading';
            anchor_link.href = data.results[i].short_url;
            anchor_link.target = "_blank"

            //appending all the elements to the html body and respective tags
            card_body.append(h51, title, date, abstract, anchor_link);
            card_row.append(card_body, card_img)
            newsCard.append(card_row)
            divCard.append(newsCard);
        }

    }
}

//function to get month and date of the news section
function getDate(raw_date) {
    var d = raw_date.split("T")[0].split("-");
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return [months[d[1] - 1], d[2]];
}

//function to get cover image of the news section having the name "Inline.jpg"
function getImage(raw_data) {
    var ind = 0;
    for (let i = 0; i < raw_data.length; i++) {
        if (raw_data[i].url.includes('articleInline.jpg')) {
            ind = i;
        }
    }
    return raw_data[ind]["url"];
}
