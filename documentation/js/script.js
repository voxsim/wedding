(function($) {

	"use strict";


    var sections = $('.section'),
        nav = $('#navbar'),
        nav_height = nav.outerHeight();

    function activeMenuItem() {
        var cur_pos = $(window).scrollTop() + 2;
        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('ul > li > a').parent().removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
            } else if (cur_pos == 2) {
                nav.find('ul > li > a').parent().removeClass('active');
            }
        });
    }

    $(function() {
        $('#navbar > ul > li > a').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 500);
                    return false;
                }
            }
        });
    });

     $(window).scroll(function() {
        activeMenuItem();
    });



})(window.jQuery);
