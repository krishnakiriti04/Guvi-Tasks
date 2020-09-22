var request = new XMLHttpRequest()
var url = "https://restcountries.eu/rest/v2/all"

request.open('GET',url,true)
request.send()

var details;

request.onload = function(){
	if(request.readyState == 4 && request.status == 200){
	var countries = JSON.parse(this.response)	
	details = countries.map((val)=>{
	var obj = {"name":val.name,
		"capital":val.capital,
		"currency":val.currencies[0]["name"],
		"region":val.region,
		"languages":val.languages.map((lang)=>lang.name)}
return obj;})

	insert(details);

	document.querySelector('#country').onchange = function(){
		change(details);
	}

	function change(details){
		
		var e = document.querySelector('#country')
		var val = e.options[e.selectedIndex].text;
		console.log(val);
		for(let i=0;i<details.length;i++)
		{
			if(val===details[i]["name"])
			{
				document.querySelector("#capital").value = details[i]["capital"];
				document.querySelector("#currency").value = details[i]["currency"];
				document.querySelector("#region").value = details[i]["region"];
			}
		}
}
}
else
	alert("Status: "+request.status+" Message: "+request.statusText);
}

request.onerror = function(){
	console.log("connection failed")
	alert("Connection failed");
}


function insert(details)
{
	var select = document.querySelector('#country');
	for(let i=0;i<details.length;i++)
	{	
		var option = document.createElement("option")
		option.text = details[i]["name"];
		option.value = i;
		select.add(option);
	}
}
