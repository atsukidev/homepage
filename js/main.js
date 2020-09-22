$(document).ready(function () {
	$('#tech-logos').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		dots: false,
		pauseOnHover: true,
		centerMode: true,
		variableWidth: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 2
			}
		}]
	});
});