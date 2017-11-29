function openChat() {
    var frame = document.getElementById("chatFrame");
    frame.className = "";
    var img = document.getElementById("chatbutton");
    img.className = "hide";
}
function closeChat() {
    var frame = document.getElementById("chatFrame");
    frame.className = "hide";
    var img = document.getElementById("chatbutton");
    img.className = "";
}

function initMap() {
    var coordinates = { lat: -36.8452936, lng: 174.7548188 };
	var map = new google.maps.Map(document.getElementById("googleMap"), {
		center: coordinates,
		zoom: 15
	});
	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h5 id="firstHeading" class="firstHeading">Contoso Bank</h5>'+
		'<div id="bodyContent">'+
		'<p>5/22 Viaduct Harbour Ave, Westhaven, Auckland 1010</p>' +
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	var marker = new google.maps.Marker({
	position: coordinates,
	map: map,
	animation: google.maps.Animation.DROP
	});
	marker.addListener('click', function() {
	infowindow.open(map, marker);
	});
}
