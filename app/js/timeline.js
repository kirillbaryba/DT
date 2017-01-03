$(document).ready(function () {
    //setColumnWidth();

    //считаем колонки и округяем до целой
    var col = 0;

    function setColumnWidth() {
        col = Math.floor($(window).width() / 130);
        $('.frame').css('width', col * 130);
    }

    $(window).resize(function () {
        //setColumnWidth();
        //$('.frame').sly('reload');
        window.location.href = window.location.href;
    });

    var current = 0;
    $('.frame').sly('on', 'moveEnd', function (eventName) {
        
        
        var currentYear = 1896 + this.rel.firstItem;
        var that = this;
        
        //show tap details
        if(currentYear == 1896 || currentYear <= 1896){
            $('.promo-tap').addClass('is-active');    
            $('.promo-tap').removeClass('is-hidden');    
        }else{
            $('.promo-tap').addClass('is-hidden'); 
            $('.promo-tap').removeClass('is-active');    
        }
        
        
        //show timetravel
        if(currentYear <= 1896){
            $('.time-travel-btn').removeClass('is-active');    
        }else{
            $('.time-travel-btn').addClass('is-active');               
        }
        
        
        if (this.pos.cur < current) {
            // - - - - -  Move previous  - - - - - - -
            for (var i = 1896 + (this.rel.lastItem + 1); i <= (new Date).getFullYear(); i++) {
                $('[id^=' + i + '_]').addClass('is-hidden').removeClass('is-active');
            }
            for (var i = 1896; i <= 1896 + this.rel.lastItem; i++) {
                $.each($('[id^=' + i + '_]'), function (key, value) {
                    if (value.dataset.endDate >= currentYear) {
                        $(this).removeClass('is-hidden').addClass('is-active');
                    }
                });
            }

            // - - - - -  Move previous text model (<span>) in timeLine  - - -
            $.each($('.timeline-grid-line.is-active'), function (key, value) {
                if (parseInt(value.dataset.endDate) + 1 > currentYear) {
                    $(this).children().css('margin-left', (currentYear - value.dataset.startDate < 0 ? 0 : currentYear - value.dataset.startDate) * 130 + 'px');
                }
            }); // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        } else {
            // - - - - -  Move next  - - - - - - -
            for (var i = 1896; i < this.rel.lastItem + 1897; i++) {
                $('[id^=' + i + '_]').removeClass('is-hidden').addClass('is-active');
            }
            for (var i = 1896; i < (currentYear - 1); i++) {
                $.each($('[id^=' + i + '_]'), function (key, value) {
                    if (value.dataset.endDate < currentYear) {
                        $(this).addClass('is-hidden').removeClass('is-active');
                    }
                });
            }

            // - - - - -  Move next text model (<span>) in timeLine  - - - - -
            $.each($('.timeline-grid-line.is-active'), function (key, value) {
                if (value.offsetLeft < that.pos.cur && parseInt(value.dataset.endDate) + 1 > currentYear) {
                    $(this).children().css('margin-left', (currentYear - value.dataset.startDate) * 130 + 'px');
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
        var id = $('#my_select').children(":selected").attr("id").substr(2);
        $('.frame').sly('toCenter', $('#'+id));
        $('.frame').sly('activate', $('#'+id));
        $('#'+id).click();
    });


    $('.timeline-grid-item').on('click', function (e) {

        parseItem(this);

        $(this).append($('.timeline-grid-popover'));
        $(this).find('.timeline-grid-popover').removeClass('hide');

        //scroll popover
        $('.timeline-grid-popover').on({
            'wheel': function (e) {
                console.log('scroll');
                if (e.target.className == 'popover-model-list-item') {
                    return;
                }
                e.stopPropagation();
            }
        });

        $('.timeline-grid-item').removeClass('grid-full').find('.timeline-grid-popover').removeClass('is-active');

        if ($(e.target).hasClass('grid-popover-close')) {
            $(e.target).closest('.timeline-grid-popover').removeClass('is-active');
        } else {
            $(this).addClass('active').addClass('grid-full').find('.timeline-grid-popover').addClass('is-active');
        }
    });
    
    
    $(".progress-bar").animate({width: "100%"}, 2500);


});