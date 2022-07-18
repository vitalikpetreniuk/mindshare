// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import 'slick-carousel'

document.addEventListener('DOMContentLoaded', () => {

	$('.header-btn').on('click', function () {
		$('.header-btn').toggleClass('opened')
		$('.mobile-nav').toggleClass('show')
		$('body, html').toggleClass('_over-hidden')
	})

	$('.main-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay: false,
		autoplaySpeed: 9000,
	});


	const windowWidth = $('body').innerWidth()

	if(windowWidth > 767){
		$('.products-slider.only-desktop').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			autoplay: false,
			autoplaySpeed: 7000,
		});
	}

	$('.products-slider.desktop-mobile').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		autoplay: false,
		autoplaySpeed: 7000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	$('.brands-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		autoplay: false,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					arrows: false
				}
			}
		]
	});

	$('.navigation-filter__head').on('click', function (e) {
		e.preventDefault()
		$(this).parent().toggleClass('active')
		$('.navigation-filter__list > li').removeClass('active')
	})

	$('.navigation-filter__list > li > a').on('click', function (e) {
		e.preventDefault()
	})

	$('.navigation-filter__list > li').on('click', function () {
		$('.navigation-filter__list > li').removeClass('active')
		$(this).toggleClass('active')
	})

})
