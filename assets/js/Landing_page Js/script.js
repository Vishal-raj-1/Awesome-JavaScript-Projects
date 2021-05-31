;(function($){
    'use strict';
    var $win = $(window), $body_m = $('body');
    // Touch Class
    if (!("ontouchstart" in document.documentElement)) {
        $body_m.addClass("no-touch");
    }
    // Sticky
    var $is_sticky = $('.is-sticky');
    if ($is_sticky.length > 0 ) {
        var $navm = $('#navbar').offset();
        $win.scroll(function(){
            var $scroll = $win.scrollTop();
            if ($win.width() > 0) {
                if($scroll > $navm.top+4 ){
                    if(!$is_sticky.hasClass('has-fixed')) {$is_sticky.addClass('has-fixed');}
                } else {
                    if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
                }
            } else {
                if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
            }
        });
    }
    // Responsive Nav Fix
    var $navtoggler = $('.navbar-toggler');
    if ($navtoggler.length > 0) {
        $navtoggler.on("click",function(){
            $body_m.toggleClass('responsive-nav-fix');
        });
    }

    // Slider
    var $slider = $('#slider');
    if ($slider.length > 0 ) {
        $slider.carousel({ interval:6000, pause: 'null' });
    }
    //Carousel
    var $has_carousel = $('.has-carousel');
    if ($has_carousel.length > 0 ) {
        $has_carousel.each(function(){
            var $self = $(this);
            var c_item = ($self.data('items')) ? $self.data('items') : 4;
            var c_item_t = (c_item >= 3) ? 3 : c_item;
            var c_item_m = (c_item_t >= 2) ? 2 : c_item_t;
            var c_delay =($self.data('delay')) ? $self.data('delay') : 4000;
            var c_auto =($self.data('auto')) ? true : false;
            var c_loop =($self.data('loop')) ? true : false;
            var c_dots = ($self.data('dots')) ? true : false;
            var c_navs = ($self.data('navs')) ? true : false;
            var c_mgn = ($self.data('margin')) ? $self.data('margin') : 30;
            var c_animateOut = ($self.data('animateOut')) ? $self.data('animateOut') : 'fadeOut';
            $self.addClass('owl-carousel').owlCarousel({
                navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                items: c_item, loop: c_loop, nav: c_navs, dots: c_dots, margin: c_mgn,animateOut: c_animateOut,
                autoplay: c_auto, autoplayTimeout: c_delay, autoplaySpeed: 700,
                responsive:{ 0:{ items:1 }, 480:{ items: 1 }, 768:{ items: c_item_t }, 1170:{ items: c_item } }
            });
        });
    }
    // LogoCarousel
    var $logo_carousel = $('.logo-carousel');
    if ($logo_carousel.length > 0 ) {
        $logo_carousel.owlCarousel({
            items: 5, loop: true, margin: 30, responsive:{0:{ items:2 }, 379:{ items:3 }, 720:{ items:4 }, 1280:{ items:6 } }
        });
    }
    // Parallax
    var $parallax = $('.has-parallax');
    if ($parallax.length > 0 ) {
        $parallax.each(function() {
            $(this).parallaxie({ speed: 0.4, offset: 0 });
        });
    }
    // Smooth scrolling using jQuery easing
    $('a.scroller[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var toHash = $(this.hash), toHashN = (this.hash.slice(1)) ? $('[name=' + this.hash.slice(1) + ']') : false;
            toHash = toHash.length ? toHash : toHashN;
            if (toHash.length) {
                $('html, body').animate({
                    scrollTop: (toHash.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Close responsive menu when a scroll trigger link is clicked
    $('.scroller').on("click", function() {
        $('.navbar-collapse').collapse('hide');
    });

    // ImageBG
    var $imageBG = $('.imagebg');
    if ($imageBG.length > 0) {
        $imageBG.each(function(){
            var $this = $(this),
                $that = $this.parent(),
                overlay = $this.data('overlay'),
                image = $this.children('img').attr('src');
            var olaytyp = (typeof overlay!=='undefined' && overlay!=='') ? overlay.split('-') : false;

            // If image found
            if (typeof image!=='undefined' && image !==''){
                if (!$that.hasClass('has-bg-image')) {
                    $that.addClass('has-bg-image');
                }
                if ( olaytyp!=='' && (olaytyp[0]==='dark') ) {
                    if (!$that.hasClass('light')) {
                        $that.addClass('light');
                    }
                }
                $this.css("background-image", 'url("'+ image +'")').addClass('bg-image-loaded');
            }
        });
    }
    // Subscribe Form
    var subscribeForm = $('#subscribe-form');
    if (subscribeForm.length > 0) {
        if( !$().validate || !$().ajaxSubmit ) {
            console.log('subscribeForm: jQuery Form or Form Validate not Defined.');
            return true;
        }
        if (subscribeForm.length > 0) {
            var selectRec = subscribeForm.find('select.required'),
                sf_results = subscribeForm.find('.subscribe-results');
            subscribeForm.validate({
                invalidHandler: function () { sf_results.slideUp(400); },
                submitHandler: function(form) {
                    sf_results.slideUp(400);
                    $(form).ajaxSubmit({
                        target: sf_results, dataType: 'json',
                        success: function(data) {
                            var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
                            sf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
                            if (data.result !== 'error') { $(form).clearForm(); }
                        }
                    });
                }
            });
            selectRec.on('change', function() { $(this).valid(); });
        }
    }

    // Contact Form
    var quoteForm = $('#contact-request');
    if (quoteForm.length > 0) {
        if( !$().validate || !$().ajaxSubmit ) {
            console.log('quoteForm: jQuery Form or Form Validate not Defined.');
            return true;
        }
        // Form Validation
        if (quoteForm.length > 0) {
            var selectRec = quoteForm.find('select.required'),
                qf_results = quoteForm.find('.form-results');
            quoteForm.validate({
                invalidHandler: function () { qf_results.slideUp(400); },
                submitHandler: function(form) {
                    qf_results.slideUp(400);
                    $(form).ajaxSubmit({
                        target: qf_results, dataType: 'json',
                        success: function(data) {
                            var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
                            qf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
                            if (data.result !== 'error') { $(form).clearForm(); }
                        }
                    });
                }
            });
            selectRec.on('change', function() { $(this).valid(); });
        }
    }

    // video Popup
    var $vdoPop = $('.video-pop');
    if($vdoPop.length > 0){
        $vdoPop.magnificPopup({
            type: 'iframe',
        });
    }

    // Typed
    var typeing = $('#typed');
    if (typeing.length > 0) {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 100,
            loop: true,
            backSpeed: 100,
            backDelay: 700,
            startDelay: 700
        });
    }
	
	// Preloader
    var $preload = $('#preloader'), $loader = $('#loader');
	if ($preload.length > 0) {
		$win.on('load', function() {
			$loader.fadeOut(300);
			$preload.delay(100).fadeOut(300);
		});
	}
	
    // particlesJS
    var $particles_js = $('#particles-js');
    if ($particles_js.length > 0 ) {
        particlesJS('particles-js',
            // Update your personal code.
            {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }
            // Stop here.
        );
    }
})(jQuery);
