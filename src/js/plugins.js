 var map;

function initMap() {

	var uluru = {lat: 50.0646501, lng: 19.9449799};

	map = new google.maps.Map(document.getElementById('map'), {
	  center: uluru,
	  zoom: 10
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
	
}