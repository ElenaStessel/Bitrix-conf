$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        autoplay: true,
        loop: true,
        dots: true,
        scroll: true,
        items: 1,
        center: true,
        autoplayTimeout: 4000,
    });

    $('.slider_arrow_left').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $('.slider_arrow_right').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $("a").click(function (e) {
        e.preventDefault();
        var body = $("html, body");
        var element = $($(this).attr("href"));
        var offset = element.offset().top;
        body.stop().animate({scrollTop: offset}, 500, 'swing');
    });

    function padWithZero(num) {
        if (num >= 10) {
            return num;
        }
        return ("0" + num);
    }

    var registrationDate = new Date(2017, 11, 5);
    setInterval(function () {
        var timeDelta = registrationDate - Date.now();
        var days = Math.floor(timeDelta / (24 * 60 * 60 * 1000));
        var hours = Math.floor(timeDelta / (60 * 60 * 1000)) - days * 24;
        var minutes = Math.floor(timeDelta / (60 * 1000)) - days * 24 * 60 - hours * 60;
        var seconds = Math.floor(timeDelta / 1000) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
        if (days == 0) {
            $(".timer").html(padWithZero(hours) + "ч : " + padWithZero(minutes) + "м : " + padWithZero(seconds) + "с");
        } else {
            $(".timer").html(days + "д : " + padWithZero(hours) + "ч : " + padWithZero(minutes) + "м : " + padWithZero(seconds) + "с");
        }
    }, 1000);
});