$(document).ready(function(){
	var long;
	var lat;

	//these are the coords for Amsterdam.
	//For using the coords of the location of the user, you can use the following link: 
	//var api = "https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'$appid=XXXXXXXXXXXXXX"; 

	var api = "https://fcc-weather-api.glitch.me/api/current?lat=52.374&lon=4.889";
	$.getJSON(api, function(data) {

		var fTemp;
		var cTemp;
		var tempSwap = true;
		var weatherType = data.weather[0].description;
		cTemp = (data.main.temp).toFixed(1);
		var windSpeed = data.wind.speed;
		var city = data.name;
		fTemp = (cTemp*(9/5)+32).toFixed(1);
		
		console.log(city);
		$("#city").html(city);
		$("#weatherType").html(weatherType);
		$("#cTemp").html(cTemp + " &#8451;");
		$("#windSpeed").html(windSpeed + " m/s");


		$("#cTemp").click(function() {
			if (tempSwap===false) {
				$("#cTemp").html(cTemp + " &#8451;");
				tempSwap=true;
			}
			else {
				$("#cTemp").html(fTemp + " &#8457;");
				tempSwap=false;
			}
		});

		
		
    if (weatherType === 'clear sky') {
        $('body').css("background-image", "url(images/clear-sky-japan.jpg)");
    }
    
    else if (weatherType.indexOf('rain') !== -1) {
     	$('body').css("background-image", "url(images/rain.jpg)");
    }

   	else if (weatherType.indexOf('clouds') !== -1) {
     	$('body').css("background-image", "url(images/few-clouds.jpg)");
    }
    
    else if (weatherType === 'thunderstorm') {
    	$('body').css("background-image", "url(images/thunderstorm.jpg)");
    }
    else if (weatherType === 'snow') {
    	$('body').css("background-image", "url(images/snow.jpg)");
    }

    else if (weatherType === 'mist') {
    	 $('body').css("background-image", "url(images/mist.jpg)");
    }
    else {
    	$('body').css("background-image", "url(images/scattered-clouds.jpg)");
    }


	});

	$(document).ready(function(){
			function update() {
				console.log("hey")
				$("#timer").text(new Date(new Date().getTime()).toLocaleTimeString())
				setTimeout(update, 1000)	
			}	
			update()	
	})

	$("#logo").click(function(){
		$(this).fadeTo('slow', .50);
	});








});