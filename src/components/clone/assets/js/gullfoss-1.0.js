var gullFoss;

(function($) {
    'use strict';
    gullFoss = {
        init: function() {
            this.heroSlider();
            this.smoothScrool();
            this.skillBars();
            this.brandCarousel();
            this.counterUp();
            this.portfolio();
            this.imageSlider();
            this.relateSlide();
            this.testimonial();
            this.magnicPopup();
            this.sticky();
            this.searchBar();
        },

        heroSlider() {
            var sliderActive = $('#heroSlideActive');
            sliderActive.on('init', function(e, slick) {
                var $firstAnimatingElements = $(
                    '.single-banner-wrap:first-child'
                ).find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });
            sliderActive.on('beforeChange', function(
                e,
                slick,
                currentSlide,
                nextSlide
            ) {
                var $animatingElements = $(
                    '.single-banner-wrap[data-slick-index="' + nextSlide + '"]'
                ).find('[data-animation]');
                doAnimations($animatingElements);
            });
            sliderActive.slick({
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
                fade: true,
                arrows: false,
                prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
            });

            function doAnimations(elements) {
                var animationEndEvents =
                    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function() {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this
                        .addClass($animationType)
                        .one(animationEndEvents, function() {
                            $this.removeClass($animationType);
                        });
                });
            }
        },

        smoothScrool() {
            $('body').scrollspy({
                target: '.navbar',
                offset: 50
            });

            $('#mainNav a').on('click', function(event) {
                if (this.hash !== '') {
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        },
                        800,
                        function() {
                            window.location.hash = hash;
                        }
                    );
                }
            });

            $('.back-to-top').on('click', function() {
                $('body, html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },

        skillBars() {
            $('.skillbar-wrap').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
                $('.bar').each(function() {
                    $(this)
                        .find('.bar-inner')
                        .animate({
                            width: $(this).attr('data-width')
                        });
                    $(this)
                        .find('.bar-icon')
                        .animate({
                            right: 0,
                            left: '100%'
                        });
                });
            })
        },

        brandCarousel: function() {
            $('#brandActive').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                dots: false,
                responsive: [{
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        },

        counterUp: function() {
            if ($.fn.counterUp) {
                //counterUp
                $('.counter').counterUp({
                    delay: 20,
                    time: 2000
                });
            }
        },

        portfolio() {
            $('.portfolio-filter li').on('click', function() {
                $('.portfolio-filter li').removeClass('filter-active');
                $(this).addClass('filter-active');

                var selector = $(this).attr('data-filter');
                $('.portfolio-items').isotope({
                    filter: selector
                });
            });
        },

        imageSlider: function() {
            var imageDosts = $('.image-dots');
            var imageArrows = $('.image-slider-ad');
            $('#imageSlideActive').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 6000,
                arrows: true,
                appendArrows: imageArrows,
                prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-up"></i></button>',
                nextArrow: '<button class="next-arrow"><i class="fas fa-angle-down"></i></button>',
                dots: true,
                appendDots: imageDosts
            });
        },

        relateSlide() {
            $('.related-post-slide').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                fade: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 6000,
                arrows: true,
                prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
                dots: false,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });

            $(".js-tabs-item:not(:first)").hide();
            $(".js-tabs-link").on("click", function(e) {
                e.preventDefault();
                var tabLink = $(this);
                var target = $(this.hash);
                $(".js-tabs-text").removeClass("m-active");
                $(".js-tabs-item:visible").fadeOut("200", function() {
                    tabLink.children().addClass("m-active");
                    target.fadeIn("200", function() {
                        $(".js-photo").slick("setPosition", 0); // modified here
                    });
                });
                console.log('TAP tab-link');
            });

            $(".js-photo").slick("setPosition", 0);
            $(".js-presentation").slick("setPosition", 0);

        },



        testimonial() {
            var testimonialDots = $('.testimonial-dots');
            $('#testimonialActive').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 6000,
                arrows: true,
                prevArrow: '<button class="prev-arrow"><img src="assets/img/icon/angle-right01.png"></button>',
                nextArrow: '<button class="next-arrow"><img src="assets/img/icon/angle-left.png"></button>',
                dots: true,
                appendDots: testimonialDots,
                customPaging: function(slick, index) {
                    var portrait = $(slick.$slides[index]).data('thumb');
                    return '<img src=" ' + portrait + ' "/>';
                }
            });
        },

        magnicPopup() {
            $('.view-icon a').each(function() {
                // the containers for all your galleries
                $(this).magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
                $('.popup-youtube').magnificPopup({
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    preloader: true
                });
            });
        },

        sticky() {
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();
                if (scroll < 245) {
                    $('.mainmenu-area').removeClass('scroll-header');
                } else {
                    $('.mainmenu-area').addClass('scroll-header');
                }
            });

            var nav_offset_top = $('header').height() + 10;
            /*-------------------------------------------------------------------------------
            	  Navbar 
            	-------------------------------------------------------------------------------*/

            //* Navbar Fixed
            function navbarFixed() {
                if ($('.mainmenu-area').length) {
                    $(window).scroll(function() {
                        var scroll = $(window).scrollTop();
                        if (scroll >= nav_offset_top) {
                            $('.mainmenu-area').addClass('navbar_fixed');
                        } else {
                            $('.mainmenu-area').removeClass('navbar_fixed');
                        }
                    });
                }
            }
            navbarFixed();
        },
        // Searchbar
        searchBar() {
            $('#searchTrigger').on('click', function() {
                $('.searchbar').toggleClass('search-show');
            });
        },
    };

    $(document).ready(function() {
        gullFoss.init();
    });

    $(window).load(function() {
        $('.portfolio-items').isotope();
        $('.loader').fadeOut('slow');
    });
})(jQuery);