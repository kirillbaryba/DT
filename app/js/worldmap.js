$(document).ready(function () {

    $('.map-marker').on('click', function () {
        $('body').find('.tm-popover').toggleClass('is-active');  
        $('body').find('.tm-backdrop').toggleClass('in');          
//        $('body').find('.main-container').addClass('main-worldmap');          
    });

    
    $('.tm-backdrop').on('click', function () {
        $('body').find('.tm-popover').removeClass('is-active');  
        $(this).removeClass('in');        
    });
        
    $('#worldmap-bg').on('click', function () {
        if($('.tm-popover').hasClass('is-active')){
            $('body').find('.tm-popover').removeClass('is-active');    
        }        
    });

    $('.icon-close').on('click', function () {
        $('body').find('.tm-popover').removeClass('is-active');
        $('body').find('.tm-backdrop').removeClass('in'); 
//        $('body').find('.main-container').removeClass('main-worldmap');
    });        
});