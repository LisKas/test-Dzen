$( document ).ready(function() {

/////////////////////////////////////////////////////	// 
	 $('.slaider').slick({
                    speed: 7000,
                    autoplay: true,
                    arrows: true,
                    prevArrow: '<img class="controls right-control slick-next" src="img/slaid-right.png">', 
                    nextArrow:    '<img class="controls left-control slick-prev" src="img/slaid-left.png">',

                });
// ///////////////////////////////////////////////////
	var latitude = 30.258940,
	    longitude = -81.392700,
	    map_zoom = 16;

	var marker_img = 'img/marker.png';
	var main_color = '#fef7';

	var style = [
  {
    "stylers": [
  { "saturation": -100 }
]
  }
];
	var map_options = {
		center: new google.maps.LatLng(latitude, longitude),
		zoom: map_zoom,
		panControl: false,
		zoomControl: true,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: style
	}  
	//инициализация карты

	var map = new google.maps.Map(document.getElementById('google-map'), map_options);
	//cвой маркер

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		visible: true,
		zIndex: 999,
		icon: marker_img
	});
// /////////////////////////////////////////////////////////////////////


     var wow = new WOW(
        {
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,         
        mobile:       true,       
        live:         true,       
        callback:     function(box) {
          },
        scrollContainer: null 
              }
            );
            wow.init();
            
       
});

// /////////////////////////////////////////////////////////////////////




    