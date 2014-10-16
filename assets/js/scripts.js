$(document).ready(function(){
	var url = window.location;
	// Direct
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
	// Relative
	$('ul.nav a').filter(function() {
	    return this.href == url;
	}).parent().addClass('active');

	$(window).load(function() {
    	$('.page #main article .article-wrap img').captionjs({
    		"is_responsive"   : true,
    		"mode": "animated"
    	});
	});

	$(".home-article-title").dotdotdot({
		watch: "window"
	});

	$(".sidebar-articles .item .sidebar-article-title h2").dotdotdot({
		
	});
	
	$(".featured-articles .item .sidebar-article-title h2").dotdotdot({
		
	});

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