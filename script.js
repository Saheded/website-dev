(function () {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        /*        var coords = document.documentElement.clientHeight;*/

        if (scrolled > 350) {
            goTopBtn.classList.add('up-button-show');
        }
        if (scrolled < 350) {
            goTopBtn.classList.remove('up-button-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -25);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.up-button');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

(function () {

    function Slideshow(element, callback) {
        this.callback = callback || function () { };
        this.el = document.querySelector(element);
        this.init();
    }

    Slideshow.prototype = {
        init: function () {
            this.wrapper = this.el.querySelector(".slider-wrapper");
            this.slides = this.el.querySelectorAll(".slide");
            this.previous = this.el.querySelector(".slider-previous");
            this.next = this.el.querySelector(".slider-next");
            this.nav = this.el.querySelector(".slider-nav");
            this.index = 0;
            this.total = this.slides.length;

            this.setup();
            this.actions();
        },
        _slideTo: function (slide) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;

            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                if (slide !== currentSlide) {
                    slide.style.opacity = 0;
                }
            }

            this.callback(currentSlide);
        },
        setup: function () {
            var slides = this.slides,
                len = slides.length,
                i;
            for (i = 0; i < len; ++i) {
                var slide = slides[i],
                    src = slide.getAttribute("data-image");

                slide.style.backgroundImage = "url(" + src + ")";
            }
        },
        actions: function () {
            var self = this;

            self.el.addEventListener("mouseover", function () {
                self.nav.style.display = "block";

            }, false);

            self.el.addEventListener("mouseout", function () {
                self.nav.style.display = "none";

            }, false);

            self.next.addEventListener("click", function () {
                self.index++;
                self.previous.style.display = "block";

                if (self.index == self.total - 1) {
                    self.index = self.total - 1;
                    self.next.style.display = "none";
                }

                self._slideTo(self.index);

            }, false);

            self.previous.addEventListener("click", function () {
                self.index--;
                self.next.style.display = "block";

                if (self.index == 0) {
                    self.index = 0;
                    self.previous.style.display = "none";
                }

                self._slideTo(self.index);

            }, false);

        }


    };

    document.addEventListener("DOMContentLoaded", function () {

        var slider = new Slideshow("#area-slider", function (slide) {
            var wrapper = slide.parentNode;
            var allSlides = wrapper.querySelectorAll(".slide");
            var caption = slide.querySelector(".slide-caption");
            caption.classList.add("visible");

            for (var i = 0; i < allSlides.length; ++i) {
                var sld = allSlides[i];
                var cpt = sld.querySelector(".slide-caption");
                if (sld !== slide) {
                    cpt.classList.remove("visible");
                }
            }


        });

    });

    document.addEventListener("DOMContentLoaded", function () {

        var slider = new Slideshow("#cottage-slider", function (slide) {
            var wrapper = slide.parentNode;
            var allSlides = wrapper.querySelectorAll(".slide");
            var caption = slide.querySelector(".slide-caption");
            caption.classList.add("visible");

            for (var i = 0; i < allSlides.length; ++i) {
                var sld = allSlides[i];
                var cpt = sld.querySelector(".slide-caption");
                if (sld !== slide) {
                    cpt.classList.remove("visible");
                }
            }


        });

    });

    document.addEventListener("DOMContentLoaded", function () {

        var slider = new Slideshow("#buildings-sauna-slider", function (slide) {
            var wrapper = slide.parentNode;
            var allSlides = wrapper.querySelectorAll(".slide");
            var caption = slide.querySelector(".slide-caption");
            caption.classList.add("visible");

            for (var i = 0; i < allSlides.length; ++i) {
                var sld = allSlides[i];
                var cpt = sld.querySelector(".slide-caption");
                if (sld !== slide) {
                    cpt.classList.remove("visible");
                }
            }


        });

    });

    document.addEventListener("DOMContentLoaded", function () {

        var slider = new Slideshow("#buildings-rest_place-slider", function (slide) {
            var wrapper = slide.parentNode;
            var allSlides = wrapper.querySelectorAll(".slide");
            var caption = slide.querySelector(".slide-caption");
            caption.classList.add("visible");

            for (var i = 0; i < allSlides.length; ++i) {
                var sld = allSlides[i];
                var cpt = sld.querySelector(".slide-caption");
                if (sld !== slide) {
                    cpt.classList.remove("visible");
                }
            }


        });

    });

    document.addEventListener("DOMContentLoaded", function () {

        var slider = new Slideshow("#buildings-workshop-slider", function (slide) {
            var wrapper = slide.parentNode;
            var allSlides = wrapper.querySelectorAll(".slide");
            var caption = slide.querySelector(".slide-caption");
            caption.classList.add("visible");

            for (var i = 0; i < allSlides.length; ++i) {
                var sld = allSlides[i];
                var cpt = sld.querySelector(".slide-caption");
                if (sld !== slide) {
                    cpt.classList.remove("visible");
                }
            }


        });

    });


    document.addEventListener("DOMContentLoaded", function () {

        var slider = new Slideshow("#garden-slider", function (slide) {
            var wrapper = slide.parentNode;
            var allSlides = wrapper.querySelectorAll(".slide");
            var caption = slide.querySelector(".slide-caption");
            caption.classList.add("visible");

            for (var i = 0; i < allSlides.length; ++i) {
                var sld = allSlides[i];
                var cpt = sld.querySelector(".slide-caption");
                if (sld !== slide) {
                    cpt.classList.remove("visible");
                }
            }


        });

    });
    document.addEventListener("DOMContentLoaded", function () {

        var slider = new Slideshow("#gallery-slider", function (slide) {
            var wrapper = slide.parentNode;
            var allSlides = wrapper.querySelectorAll(".slide");
            var caption = slide.querySelector(".slide-caption-mod");
            caption.classList.add("visible");

            for (var i = 0; i < allSlides.length; ++i) {
                var sld = allSlides[i];
                var cpt = sld.querySelector(".slide-caption-mod");
                if (sld !== slide) {
                    cpt.classList.remove("visible");
                }
            }


        });

    });


})();
