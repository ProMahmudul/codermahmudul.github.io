$(document).ready(function () {
    'use strict';

	//********* page loader js

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 2000);


	//********** menu background color change while scroll

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});


	//********** menu hides after click (mobile menu)

	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});



	//************ smooth scroll js

	$('a.smooth-menu,a.custom-btn,a.banner-btn').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
	});

	//*********** Animated headline js

	$('.animate-scale').animatedHeadline({
		animationType: 'clip'
	});

});


//*********** scrollspy js

$(function (){
  $('.srollypy').scrollWatchMapTo('nav ul li');
});

//***** Skill bar js

var skillbar = $(".skillbar");

skillbar.waypoint(function () {
  skillbar.each(function () {
    $(this).find(".skillbar-child").animate({
      width: $(this).data("percent")
    }, 1000);
  });
}, {
  offset: "80%"
});



//*** wow js

new WOW().init();

//*** Services carousel

$(document).ready(function(){

	$("#services-carousel").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 800,
		paginationSpeed: 800,
		smartSpeed: 500,
		autoplay: true,
		singleItem: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			680:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

});


//******scrollSpy up js

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});


//******Counter up js

$(document).ready(function(){
  $('.counter').counterUp({
    delay: 50,
    time: 4000
  });
});


//*****Magnific Pop up js


$(document).ready(function(){
	$('#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6').magnificPopup({
		delegate: 'a',
		removalDelay: 400, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});
});


//*****Testimonial carousel

$(document).ready(function(){
	$("#testimonial-carousel").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 800,
		paginationSpeed: 800,
		smartSpeed: 500,
		autoplay: true,
		singleItem: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			680:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
});


//*****Test navbar

// $(document).ready(function(){
// 	$(window).on('scroll', function(){
// 		if($(window).scrollTop()){
// 			$('nav').addClass('sticky_nav');
// 		}
// 		else {
// 			$('nav').removeClass('sticky_nav');
// 		}
// 	});
// });

//******* Open Street Map

// position we will use later
    var lat = 23.7806;
    var lon = 90.4078;
    // initialize map
    map = L.map('mapDiv').setView([lat, lon], 13);
    // set map tiles source
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
    // add marker to the map
    marker = L.marker([lat, lon]).addTo(map);
    // add popup to the marker
    marker.bindPopup("<b>Rabea Manjil.</b><br/> GP/Ja-71, Wireless Gate <br/>Mohakhali, Dhaka-1212").openPopup();
