$(function () {
    var heightWindow = $(window).height();
    var widthWindow = $(window).width();

    // $('.icheck').iCheck();

    $('#header-menu').on({
        'show.bs.collapse': function () {
            $('html, body').addClass('opened-menu');
        },
        'hide.bs.collapse': function () {
            $('html, body').removeClass('opened-menu');
        }
    });

    $('.figure-icon').on('click', function () {
        window.location = $('a', this).attr('href');
    });

    // MENU

    $('.has-sub a').on('click', function () {
        window.location = $(this).attr('href');
    });

    $('[data-toggle="has-sub"]').on('touchend', function () {
        var navLi = $(this).parent();
        navLi.addClass('open');
    });

    // Este trecho não pode ser executado em versões mobile
    if (!isMobile.phone) {
        $('.has-sub').on('mouseover', function () {
            $(this).addClass('open');
        });

        $('.has-sub').on('mouseleave', function () {
            $(this).removeClass('open');
        });
    };

    if (widthWindow < 768) {
        $('.dropdown-submenu').prepend('<li class="back-menu"><a href="#">Voltar</a></li>')
        $('.dropdown-menu').prepend('<li class="back-menu"><a href="#">Voltar</a></li>')

        $('.back-menu a').on('click', function (event) {
            event.preventDefault();
            /* Act on the event */

            console.log('back');
            $(this).closest('.open').removeClass('open')
        });
        $('.navbar-nav .has-sub >a').on('click', function (event) {
            event.preventDefault();
            /* Act on the event */
        });
    }

    $('.src-input').hide();
    $('.icon-search').on('click', function (event) {
        if ($('.src-input').css('display') == 'none') {
            event.preventDefault();
            /* Act on the event */
            $('.src-input').show('fast');
        }
    });


    $('[data-toggle="tooltip"]').tooltip();
    //Check if some element exists
    $.fn.exists = function (callback) {
        var args = [].slice.call(arguments, 1);
        if (this.length) {
            callback.call(this, args);
        }
        return this;
    };

    if ($('.owl-como-funciona').length > 0) {
        //Carrossel Como Funciona
        $('.owl-como-funciona').owlCarousel({
            items: 1,
            center: true,
            loop: true,
            dots: true,
        });
    };

    if ($('.owl-banner').length > 0) {
        //Carrossel Banner
        $('.owl-banner').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            dots: true,
            navText: [
                '<span class="glyphicon glyphicon-left-circle"></span>',
                '<span class="glyphicon glyphicon-right-circle"></span>'
            ]
        });
    }
    if ($('.owl-cases').length > 0) {
        //Carrossel cases
        $('.owl-cases').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            navText: [
                '<span class="icon icon-angle-left"></span>',
                '<span class="icon icon-angle-right"></span>'
            ]
        });
    }
    if ($('.owl-produto').length > 0) {
        //Carrossel cases
        $('.owl-produto').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            thumbs: true,
            thumbsPrerendered: true,
            thumbImage: false,
            navText: [
                '<span class="icon icon-angle-left"></span>',
                '<span class="icon icon-angle-right"></span>'
            ]
        });
    }

    $('.btn-video').on('click', function (event) {
        event.preventDefault();
        /* Act on the event */

        $(this).parent().slideDown('fast', function () {
            $(this).removeClass('box-video--hide')
        });
    });

    var widthProgress = $('.dimensione .barra-status--progress').data("index");
    $('.dimensione .barra-status--progress').width(widthProgress + "%");

    // if ($('.dimensione').length > 0) {
    //   var heightBoxDimensione = Math.max.apply(null, $(".dimensione .dimensione--item").map(function (){
    //       return $(this).outerHeight();
    //   }).get());

    //   $(".dimensione .dimensione--item").outerHeight(heightBoxDimensione);
    // }

    $('.produtos-orcamento .produtos-orcamento--item').on('click', function (event) {
        event.preventDefault();
        /* Act on the event */
        $('.produtos-orcamento .produtos-orcamento--item').removeClass('selected');
        $(this).addClass('selected');
    });


    $('.footer .site-map a[href*="#"]').each(function () {
        $(this).attr('data-toggle', 'modal');
    });

    $('.footer .site-map a[href*="#politicaPrivacidade"]').each(function () {
        $(this).attr('data-toggle', '');
        $(this).addClass('politicaprivacidade');
    });

    $('.politicaprivacidade').on('click', function (event) {
        event.preventDefault();
        $('#modalImprint').modal('show');
        //$('#').tab('show')
        $('#lnkpoliticaPrivacidade').trigger('click');
    });

    if ($('.table-responsive').length > 0) {
        var tableHight = $('.table-responsive').outerHeight();

        if (tableHight > 225) {
            $('.table').height(225);
            $(".table-responsive").append("<a href='#' class='more-info'><span class='icon icon-angle-down'></span> Ver Especificações Técnicas</a>")

            $('.table-responsive .more-info').on('click', function (event) {
                event.preventDefault();
                /* Act on the event */

                $(this).parent('.table-responsive').addClass('open');
            });
        }
        else {
            $('.table').addClass('table-small');
        }
    }

    $('.landing-aquecedores .btn-anchor').click(function (e) {
        e.preventDefault();
        var item = $(this).attr('href');
        $('html,body').animate({ scrollTop: $(item).offset().top }, 'slow');
    });
    if ($(window).width() < 992 && $(window).width() > 0) {
        $('.landing-aquecedores:not(.landing-aquecedores__3) .landing-form').appendTo('#modalForm .modal-content');
    }

});