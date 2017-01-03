$(document).ready(function () {
    //setColumnWidth();

    //считаем колонки и округяем до целой
    var col = 0;

    function setColumnWidth() {
        col = Math.floor($(window).width() / 230);
        $('.frame').css('width', col * 230);
    }

    $(window).resize(function () {
        //setColumnWidth();
        //$('.frame').sly('reload');
        location.reload();
    });

    var current = 0;
    $('.frame').sly('on', 'moveEnd', function (eventName) {

        var currentYear = 1896 + this.rel.firstItem;
        var that = this;

        if (this.pos.cur < current) {
            // - - - - -  Move previous  - - - - - - -
            for (var i = 1896 + (this.rel.lastItem + 1); i <= 2013; i++) {
                $('[id^=' + i + '_]').addClass('is-hidden').removeClass('is-active');
            }

            // - - - - -  Move previous text model (<span>) in timeLine  - - -
            $.each($('.timeline-grid-line.is-active'), function (key, value) {
                if (parseInt(value.dataset.endDate) + 1 > currentYear) {
                    console.log(currentYear - value.dataset.startDate + ': ' + value.id);
                    $(this).children().css('margin-left', (currentYear - value.dataset.startDate < 0 ? 0 : currentYear - value.dataset.startDate) * 230 + 'px');
                }
            }); // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        } else {
            // - - - - -  Move next  - - - - - - -
            for (var i = 1896; i < this.rel.lastItem + 1897; i++) {
                $('[id^=' + i + '_]').removeClass('is-hidden').addClass('is-active');
            }

            // - - - - -  Move next text model (<span>) in timeLine  - - - - -
            $.each($('.timeline-grid-line.is-active'), function (key, value) {
                if (value.offsetLeft < that.pos.cur && parseInt(value.dataset.endDate) + 1 > currentYear) {
                    $(this).children().css('margin-left', (currentYear - value.dataset.startDate) * 230 + 'px');
                }
            }); // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        }

        current = this.pos.cur;
    });

    /*
     $('#my_select').change(function () {
     var id = $(this).children(":selected").attr("id");
     $('.frame').sly('toStart', id.substr(2));
     }); */

    $('#my_select').change(function () {
        $('#gotoYear').children('span').html($(this).children(":selected").val());
    });

    $('#gotoYear').click(function () {
        var id = $('#my_select').children(":selected").attr("id");
        $('.frame').sly('toStart', id.substr(2));
    });




    $('.timeline-grid-item').on('click', function (e) {
        $('.timeline-grid-item').removeClass('grid-full').find('.timeline-grid-popover').removeClass('is-active');
        var target = $(e.target);
        if (target.hasClass('grid-popover-close')) {
            target.closest('.timeline-grid-popover').removeClass('is-active');
        } else {
            $(this).addClass('active').addClass('grid-full').find('.timeline-grid-popover').addClass('is-active');            
        }
        
    });

});