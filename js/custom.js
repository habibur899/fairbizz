(function ($) {
"use strict";

// Slick Slider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true,
		fade: true,
		prevArrow:'<button type="button" class="slick-prev"><i class="lnr lnr-arrow-left"></i>Prev</button>',
		nextArrow:'<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i>Next</button>',
		arrows: true,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } },
      {
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    },
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

//case
$('.case-active').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
  arrows: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Testimonial
$('.testimonial-active').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
  arrows: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//Brand
$('.brand-active').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//NiceSelect
 $('select').niceSelect();

})(jQuery);