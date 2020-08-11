
function displayImage(data){

	// $('<img>',{
	// 	src: data.url,
	// }).appendTo('#image-container');

	var img = $(document.createElement('img'));
	img.attr('src', data.url);
	img.appendTo('#image-container');
}


$.ajax({
	url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY',
	method: 'GET',
	success: displayImage
	data: {
		api_key: 'DEMO_KEY',
		earth_date: '2019-12-19',
	}
});