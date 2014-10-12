$(document).ready(function(){
	$("#header-carousel").slick({
		arrows: true,
		infinite: true,
  		autoplay: true,
  		autoplaySpeed: 10000,
  		adaptiveHeight: true
	});
	$("#partners-carousel").slick({
		arrows: true,
		infinite: true,
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1
	});
});