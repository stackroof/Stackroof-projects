$(document).ready(function () {

	"use strict";

	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
	$(".animationload").delay(400).fadeOut("fast");

	var bgi = $("[data-background]");
	bgi.length > 0 && bgi.each(function () {
		var e = $(this),
			t = e.attr('data-background');
		e.css({ 'background-image': 'url(' + t + ')' });
	});

	var progressBar = $('.progress-bar');
	progressBar.length > 0 && progressBar.each(function () {
		var e = $(this),
			t = e.attr('aria-valuenow');
		e.css({ 'width': t + '%' });
	});

	/* =================================
	SCROLL TO
	=================================== */
	$('a[href^="#"]').on('click', function (event) {

		var target = $(this.getAttribute('href'));

		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});

	/* =================================
	NAVBAR 
	=================================== */
	var top = jQuery(document).scrollTop();
	var batas = 200;
	var navbar = jQuery('.navbar-main');
	var navbarnav = jQuery('.navbar-nav');
	var header = jQuery('.header');


	if (top > batas) {
		navbar.addClass('stiky');
		navbarnav.addClass('ml-auto');
	}
	jQuery(window).scroll(function () {
		top = jQuery(document).scrollTop();


		if (top > batas) {
			navbar.addClass('stiky');
		} else {
			navbar.removeClass('stiky');
			if (header.hasClass('header-2')) {
				navbarnav.removeClass('ml-auto');
			}
			if (header.hasClass('header-5')) {
				navbarnav.removeClass('ml-auto');
			}
		}

	});

	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	var slides = $(".full-screen"),
		b = slides.find('.item');
	b.each(function () {
		var e = $(this),
			ocImg = e.find('img').attr('src');
		e.css({ 'background-image': 'url(' + ocImg + ')' });
	});

	slides.owlCarousel({
		// stagePadding: 50,
		loop: true,
		// margin: 10,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		dots: false,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
		],
		navContainer: '.banner .custom-nav',
		items: 1,
	});

	/* =================================
	BACK TO TOP 
	=================================== */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function () {
		($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, scroll_top_duration
		);
	});


	var whoweare = $("#whoweare");
	whoweare.owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 1500,
		autoplayHoverPause: true,
		items: 1,
		dots: true,
		loop: true
	});

	var carousel_2 = $(".testimonial-caro");
	carousel_2.owlCarousel({
		margin: 30,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items: 3,
		dots: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	var testimony = $("#testimonial");
	testimony.owlCarousel({
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items: 1,
		dots: true,
		loop: true
	});

	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.grid, .popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title') + '';
			}
		}
	});

	/* =================================
	ISOTOP
	=================================== */

	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		isFitWidth: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

	$grid.imagesLoaded().progress(function () {
		$grid.isotope('layout');
	});

	$('#filter2 a').on('click', function () {
		$('#filter2 .active').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$grid.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine: "jquery"
			}
		});
		return false;
	});

	var $gridv2 = $('.grid-v1');
	$gridv2.isotope({
		itemSelector: '.grid-item-v1',
		isFitWidth: true,
		filter: '.design',
		masonry: {
			columnWidth: '.grid-sizer-v1'
		}
	});

	$gridv2.imagesLoaded().progress(function () {
		$gridv2.isotope('layout');
	});

	$('.portfolio_filter a').on('click', function () {
		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$gridv2.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine: "jquery"
			}
		});
		return false;
	});



});



//   our team slider

$('#slide-testimonal').owlCarousel({
	margin: 0,
	center: true,
	autoplay: 100,
	loop: true,
	nav: false,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2,
			margin: 15,
		},
		1000: {
			items: 3,
		}
	}
});
function moreRead() {
	var dots = document.getElementById("less");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}



$(function () {
	var $slider = $('.slider');
	var sizeImage = 300;
	var items = $slider.children().length;
	var itemswidth = (items * sizeImage); // 140px width for each client item 
	$slider.css('width', itemswidth);

	var rotating = true;
	var sliderspeed = 2;
	var seeitems = setInterval(rotateSlider, sliderspeed);

	$(document).on({
		mouseenter: function () {
			rotating = false; // turn off rotation when hovering
		},
		mouseleave: function () {
			rotating = true;
		}
	}, '.showcase');

	function rotateSlider() {
		if (rotating != false) {
			var $first = $('.slider .item:first');
			$first.animate({ 'margin-left': '-' + sizeImage + 'px' }, 5000, "linear", function () {
				$first.remove().css({ 'margin-left': '0px' });
				$('.slider .item:last').after($first);
			});
		} else {
			// $first.stop();
		}
	}
});


const btn = document.getElementById('formBtn');

document.getElementById('contact-form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		btn.value = 'Sending...';

		const serviceID = 'service_abl8v5k';
		const templateID = 'template_g7cjx3q';

		emailjs.sendForm(serviceID, templateID, this)
			.then(() => {
				btn.value = 'Send Email';
				alert('Sent!');
			}, (err) => {
				btn.value = 'Send Email';
				alert(JSON.stringify(err));
			});
		document.getElementById("contact-form").reset();
	});



var typed = new Typed('.web', {
	strings: ['WEB APP DEVELOPERS', 'MOBILE APP DEVELOPERS', 'HYBRID APP DEVELOPERS'],
	typeSpeed: 60,
	backSpeed: 60,
	loop: true
});
var tagLine = new Typed('.tag-line-animation', {
	strings: ['SERVING INNOVATION'],
	typeSpeed: 60,
	backSpeed: 60,
	loop: true
});
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {

	if (index < 0) {
		index = slides.length - 1;
	}

	if (index > slides.length - 1) {
		index = 0;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		dot[i].classList.remove("active");
	}

	slides[index].style.display = "block";
	dot[index].classList.add("active");

	index++;

	setTimeout(changeSlide, 2000);

}

changeSlide();

let nameInput = document.getElementById("name")
let nameError = document.getElementById("name-error")
let emailInput=document.getElementById("email")
let emailError=document.getElementById("email-error")
let subjectInput = document.getElementById("subject")
let subjectError = document.getElementById("subjectError")
let phoneInput = document.getElementById("phone")
let phoneError = document.getElementById("phoneError")

function namevalidte() {
	if (!nameInput.value.match((/^[A-Za-z-' ']{3,30}$/))) {
		nameError.innerHTML = "Please enter a valid name";
		nameInput.style.borderColor = "red";
		return false
	}
	nameError.innerHTML = "";
	nameInput.style.borderColor = "green";
	return true
}
function ValidateEmail(input) {

	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
	if (emailInput.value.match(validRegex)) {

		emailError.innerHTML = "";
	   emailInput.style.borderColor = "green";
  
	
		return false
	} 	
	emailError.innerHTML = "Please enter a valid email";
	emailInput.style.borderColor = "red";
	return true
}
  
  
function subvalidte(){
	if (!subjectInput.value.match((/^[A-Za-z-' ']{5,10}$/))){
		subjectError.innerHTML = "Subject must be atleast 5-10 charecter";
		subjectInput.style.borderColor = "red";
		return false
	}
	subjectError.innerHTML = "";
	subjectInput.style.borderColor = "green";
	return true
}
function phonevalidte(){
	if (!phoneInput.value.match((/^[0-9]{9,25}$/))){
		phoneError.innerHTML = "please enter a valid number";
		phoneInput.style.borderColor = "red";
		return false
	}
	phoneError.innerHTML = "";
	phoneInput.style.borderColor = "green";
	return true
}

