$(document).ready(function() {
	setitemheight();
	$(window).resize(function(){		
		setitemheight();		
	});
	var url = window.location;
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
	$('ul.nav a').filter(function() {
	    return this.href == url;
	}).parent().addClass('active');
	$(window).load(function() {
    	$('.page #main article .article-wrap *[data-caption]').captionjs({
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
  		adaptiveHeight: false,  		
  		prevArrow: '<button type="button" data-role="none" style="height:40px; width:40px;" class="slick-prev">Previous</button>',
  		nextArrow: '<button type="button" data-role="none" style="height:40px; width:40px;" class="slick-next">Next</button>'
	});
	$("#partners-carousel").slick({
		arrows: true,
		infinite: true,
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow: '<button type="button" data-role="none" style="height:40px; width:40px;" class="slick-prev">Previous</button>',
  		nextArrow: '<button type="button" data-role="none" style="height:40px; width:40px;" class="slick-next">Next</button>'
	});
	var div = $('iframe');
	var width = (div.width() * 0.6);
	$("iframe").css('height', width);
	setTimeout(function() {	
		$("iframe#twitter-widget-0").css({
			"width": "100%",
			"height": "200px",
			"visibility": "visible"
		});
		$(".spinner").hide();			
	}, 3000);
	$('#search-query').lunrSearch({
      indexUrl: '/search.json',              
      results:  '#search-results',          
      entries:  '.entries',                 
      template: '#search-results-template'  
    });
   	var black = $(".black-word").text();
   	var green = $(".green-word").text();
	$(".black-word").text(black.slice(0, black.indexOf(green)));
	$("span[id*='title-']").each(function() {
		var id = $(this).attr("id");
		var green2 = $(this).find(".subpage-title-green").text();
		var black2 = $(this).text();
		$("#" + id).text(black2.slice(0, black2.indexOf(green2))).append("<span class='subpage-title-green'>" + green2 + "</span>");
	});

	var twitterOptions = {
	    "url": "/assets/css/twitter.css"
	};
	CustomizeTwitterWidget(twitterOptions);
});
var setitemheight = function(){
	var itemheight = $('.featured-articles .item').width();
	var letterheight = itemheight / 8;

	$(".featured-articles .item").css({
		"height": itemheight + "px"
	});			
}