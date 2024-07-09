$(document).ready(function () {
    if (!$('body').hasClass('areaedicao')) {
        var lastScrollTop = 0;
        $(window).scroll(function (event) {
            var heightWindow = $(window).height();
            var scroll = $(window).scrollTop();
            // Do something
            if (scroll > lastScrollTop) {
                $('header').addClass('fixed');
                $('header').removeClass('up');
                $('.destaque-orcamento ').addClass('fixed');
                $('.destaque-orcamento ').removeClass('up');
            }
            else if ((scroll > 150) && (scroll < lastScrollTop)) {
                $('header').addClass('up');
                $('.destaque-orcamento').addClass('up');
            }
            else {
                $('header').removeClass('fixed');
                $('header').removeClass('up');
                $('.destaque-orcamento').removeClass('fixed');
                $('.destaque-orcamento').removeClass('up');
            }

            lastScrollTop = scroll;
        });
    }
});