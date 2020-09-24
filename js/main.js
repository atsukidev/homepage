$(document).ready(function () {

	$("#contact-form-internal").submit(function(e){
		$('#modalSuccessForm').modal('show');
		return false;
	});

	// Floating image on Hero
	const wrapper = $(".floating-element-wrapper");
	wrapper.on('mousemove', function (e) {
		const x = e.clientX - $(this).offset().left + $(window).scrollLeft();
		const y = e.clientY - $(this).offset().top + $(window).scrollTop();

		// Relative XY to card
		const rY = map(x, 0, $(this).width(), -10, 10);
		const rX = map(y, 0, $(this).height(), -10, 10)

		$(this).children(".floating-element")
			.css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
	});

	wrapper.on('mouseenter', function () {
		$(this).children(".floating-element").css({
			transition: "all " + 0.8 + "s" + " linear"
		});
	});

	wrapper.on('mouseleave', function () {
		$(this).children(".floating-element").css({
			transition: "all " + 0.8 + "s" + " linear"
		});
		$(this).children(".floating-element")
			.css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
	});

	// Slick Slideshow in Tech We Use
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

function map(direction, in_min, in_max, out_min, out_max) {
	return (direction - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
