$(document).ready(function(){
	var url = window.location;
	// Direct
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
	// Relative
	$('ul.nav a').filter(function() {
	    return this.href == url;
	}).parent().addClass('active');

	$(window).load(function() {
    	$('.page #main article .article-wrap img[data-caption]').captionjs({
    		"is_responsive"   : true,
    		"mode": "animated"
    	});
	});

	$('ul.nav li.dropdown').hover(function() {
  		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
	}, function() {
  		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
	});

	$(".home-article-title").dotdotdot({
		watch: "window"
	});

	$(".sidebar-articles .item .sidebar-article-title h2").dotdotdot({});
	
	$(".featured-articles .item .sidebar-article-title h2").dotdotdot({});

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