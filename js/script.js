$(function () {
    $(window).scroll(function () {
        // sticky menu start
        //this is for sticky menu
        var sticky = $(this).scrollTop()
        if (sticky > 50) {
            $(".menu-bar").addClass("sticky-menu")
        } else {
            $(".menu-bar").removeClass("sticky-menu")
        }
        //this is for sticky menu padding
        if (sticky > 50) {
            $(".logo").addClass("scroll-logo")
        } else {
            $(".logo").removeClass("scroll-logo")
        }
        // sticky menu end


        // back to top start
        //back to to button animation
        if (sticky > 50) {
            $(".back-to-top").fadeIn(300)
        } else {
            $(".back-to-top").fadeOut(300)
        }
    })
    //back to top button click
    $(".back-to-top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000)
    })
    // back to top end

    //smooth scroll start
    var html_body = $('html, body');
    $('.nav-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 95
                }, 1500);
                return false;
            }
        }
    });
    //smooth scroll end

    // typed js start
    $(".typed").typed({
        strings: ["PSD Templates.", "FIGMA Templates.", "CANVA Templates."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 200,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 200,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: Infinity,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });
    // typed js end


    // wow js start
    new WOW().init();
    // wow js end

    // counter js start
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    // counter js end

    // recent slide js start
    $('.recent-slide-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: true,
        initialSlide: 1,
        prevArrow: '.recent-icon-left',
        nextArrow: '.recent-icon-right',
        responsive: [
            // for medium device
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // for small device
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            // for xtra small device
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
          ]
    });
    // recent slide js end


    // venu box js start
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
    // venu box js end


    // mix it up js start
    var containerEl = document.querySelector('.mix-it-up');

    var mixer = mixitup(containerEl);
    // mix it up js end

})

// custom mobile menu start 
let mobile_menu = document.getElementById("mobile-menu");
let bars = document.querySelector(".bars");
let line_one = document.querySelector(".line-one");
let line_two = document.querySelector(".line-two");
let line_three = document.querySelector(".line-three");


bars.addEventListener("click",function(){
    mobile_menu.classList.toggle("slide-menu");
    line_one.classList.toggle("close-line1");
    line_two.classList.toggle("close-line2");
    line_three.classList.toggle("close-line3");
})
// custom mobile menu end