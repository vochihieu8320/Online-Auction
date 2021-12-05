/*
Author       : Dreamguys
Template Name: Booking - Bootstrap Template
Version      : 1.0
*/

(function($) {
    "use strict";
	 
	//libraries slider

	$('.owl-carousel.libraries-items').owlCarousel({
		loop:true,
		margin:15,
		dots: false,
		nav:true,
		navContainer: '.slide-nav-1',
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			768:{
				items:2
			},
			1000:{
				items:3
			},
			1300:{
				items:5
			}
		}
	})
	
	//books slider

	$('.owl-carousel.books-items').owlCarousel({
		loop:true,
		margin:15,
		dots: false,
		nav:true,
		navContainer: '.slide-nav-2',
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			768:{
				items:2
			},
			1000:{
				items:3
			},
			1300:{
				items:5
			}
		}
	})
	
	//librarian slider

	$('.owl-carousel.librarian-items').owlCarousel({
		loop:true,
		margin:15,
		dots: false,
		nav:true,
		navContainer: '.slide-nav-3',
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			768:{
				items:2
			},
			1000:{
				items:3
			},
			1300:{
				items:5
			}
		}
	})
	
	//course slider

	$('.owl-carousel.course-items').owlCarousel({
		loop:true,
		margin:15,
		dots: false,
		nav:true,
		navContainer: '.slide-nav-4',
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			},
			1300:{
				items:3
			}
		}
	})
	
	//reviews slider

	$('.owl-carousel.reviews-items').owlCarousel({
		loop:true,
		margin:15,
		dots: false,
		nav:true,
		navContainer: '.slide-nav-5',
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			},
			1300:{
				items:3
			}
		}
	}) 
	
})(jQuery);