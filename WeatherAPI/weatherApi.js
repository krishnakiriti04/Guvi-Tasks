
function search(){

var city = document.getElementById('city').value
var country = document.getElementById('country').value


var request = new XMLHttpRequest()
var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&APPID=a9cfdb29a716e26d71aebb273da499d6"
request.open('GET',url,true)
request.send()

request.onload = function(){
	if(request.readyState == 4 && request.status == 200){
	var data = JSON.parse(this.response);
	var temp = (data["main"]["temp"]-273.15).toFixed(1);
	document.querySelector('#weather').innerHTML = data["name"]+","+data["sys"]["country"]+" Temperature "+temp+"&deg, wind "+data["wind"]["speed"] +" m/s, pressure " +data["main"]["pressure"]+" hpa";
	console.log(city,country);	
	}
	else{
		alert("Status: "+request.status+" Message: "+request.statusText);
		console.log("Status: "+request.status+" Message: "+request.statusText);
	}
}
	
request.onerror = function(){
	console.log("connection failed")
	alert("Connection failed");
}
	

}

