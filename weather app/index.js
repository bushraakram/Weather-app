$(document).ready(function(){


let searchInput = document.getElementById("search-txt");


var temperature;
var humidity;
var cityname;
var rounded;
const appkey='4babc68744a55513711959e34f9a399c';
var icon;


	function getWeather()
	{
		$.ajax({

			url:'https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+'&appid='+appkey,
		

			success: function(response){
				temperature=response.main.temp-273;
				 rounded = Math.round( temperature * 10 ) / 10;
				humidity=response.main.humidity;
				cityname=response.name;
				icon=response.weather[0].icon;
				

				$('#city-name').text(cityname);
				$('#temp').text(rounded+'°');
				$('#humidity-div').text(humidity+'%');
				$('#icon').attr('src','http://openweathermap.org/img/w/'+icon+'.png');
				


			}
			


		});
	}

	$('#search-btn').on('click',function(){
		getWeather();

	});

});