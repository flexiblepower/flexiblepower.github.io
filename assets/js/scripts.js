$(document).ready(function(){
	var url = window.location;
	// Direct
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
	// Relative
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
  		adaptiveHeight: true,  		
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

	var changeIntroHeight = function (){
		var introHighestHeight = 0;
		$("div[class*='intro-story']").each(function() {
			$(this).height("auto");
			if ($(this).height() > introHighestHeight) {
				introHighestHeight = $(this).height();
			}
			$("div[class*='intro-story']").height(introHighestHeight + 50);
		});
	}

	setTimeout(function() {	
		$("iframe#twitter-widget-0").css({
			"width": "100%",
			"height": "200px",
			"visibility": "visible"
		});
		$(".spinner").hide();
	}, 2000);
	

	changeIntroHeight();

	$(window).resize(function(){		
		changeIntroHeight();		
	});

	$('#search-query').lunrSearch({
      indexUrl: '/search.json',              
      results:  '#search-results',          
      entries:  '.entries',                 
      template: '#search-results-template'  
    });
   
});