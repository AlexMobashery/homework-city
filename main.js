//load the whole document before beginning js
$(document).ready(function() {
	
// upon submit, display
	$('#submit-btn').click(function changeBackground(){
	//defining the variable
	var city = $('#city-type').val();
	//log  city
	console.log(city);

	var city = city.trim().toLowerCase();
	// using the string -> display background
		if((city === 'new york') || (city === 'new york city')|| (city === 'nyc')) {
			$('body').attr('class', 'nyc');
		} else if((city === 'san francisco') || (city === 'sf')|| (city === 'bay area')) {
			$('body').attr('class', 'sf');
		} else if((city === 'los angeles') || (city === 'la') || (city ==='lax')) {
			$('body').attr('class', 'la');
		} else if((city === 'austin') || (city === 'atx')) {
			$('body').attr('class', 'austin');
		} else if((city === 'sydney') || (city ==='syd')) {
			$('body').attr('class', 'sydney');
		}
	//input reset
$('#city-type').val("");
});

//prevent reload
$('#submit-btn').click(function(event) {
	event.preventDefault();
});

//end function ready
});

