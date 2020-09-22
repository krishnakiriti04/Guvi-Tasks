
var request = new XMLHttpRequest()
var url = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
var proxy = "https://cors-anywhere.herokuapp.com/"
url = proxy+url;
request.open('GET',url,true)
request.send()

request.onload = function(){
	if(request.status == 200 && request.readyyState == 4){
	var data = JSON.parse(this.response);
	console.log(data.domains)
	insert(data);
	}
	else{
		alert("Page Status : "+request.status);
		console.log("Page Status : "+request.status);
	}
}

request.onerror = function(){
	console.log("connection failed")
	alert("Connection failed");
}


function insert(details)
{
	var select = document.querySelector('#domain');
	for(let i=0;i<details.domains.length;i++)
	{	
		var option = document.createElement("option")
		option.text = details.domains[i].domain;
		option.value = i;
		select.add(option);
	}
}
