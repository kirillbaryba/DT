$(document).ready(function () {


    $('.toggle-mnu').on('click', function () {
        $(this).addClass('is-hidden');
        parent.$('.offset-menu-one').addClass('is-active');
        parent.$('.main-container').addClass('canvas-left');
    });


    $('.icon-close').on('click', function () {
        parent.$('.main-container').removeClass('canvas-left');
        parent.$('.offset-menu-two').removeClass('is-active');
        $('.toggle-mnu').toggleClass('is-hidden');
    });

    $('#sub-list').on('click', function () {
        $('.icon-close').hide();
        $('.offset-menu-one').removeClass('is-active');
        parent.$('.offset-menu-two').addClass('is-active');
        return false;
    });

    $('.icon-arrow-left').on('click', function () {
        //$(this).hide();
        $('.icon-close').show();
        $('.offset-menu-one').addClass('is-active');
        $('.offset-menu-two').removeClass('is-active');
    });

});



