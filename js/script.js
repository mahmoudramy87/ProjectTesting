$(document).on("pageinit", "#map-page", function() {
	
	drawMap();
	retrieveData();
	
	function drawMap() {
		var mapOptions = {
			center: new google.maps.LatLng(30, 26),
			zoom: 4,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}
	
	var banks = [];
	
	function retrieveData() {
		$.getJSON("js/data.json", function(info) {
			for( var i = 0; i < info.bank.length; i ++ ) {
				banks.push(info.bank[i].name);
			}
			getBankNames(banks);
		});
	}
	
	function getBankNames(bankNamesArray) {
		for(var i = 0; i < bankNamesArray.length; i ++ ) {
			$("#select-native-14").append("<option>" + bankNamesArray[i] + "</option>");
		}
	}
});
