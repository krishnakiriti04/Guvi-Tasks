
var request = new XMLHttpRequest()
var url = "https://dog.ceo/api/breeds/list/all";
request.open('GET',url,true)
request.send()

request.onload = function(){
	if(request.status == 200 && request.readyState == 4){
	var data = JSON.parse(this.response);	
	console.log(data.message);
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
