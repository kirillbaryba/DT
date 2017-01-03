$(document).ready(function () {

   $('.toggle-mnu').on('click', function () {
        $(this).addClass('is-hidden');
        parent.$('.offset-menu-one').addClass('is-active');
        parent.$('.main-container, .nav-media').addClass('canvas-left');
    });

    $('.aside-close').on('click', function () {
        parent.$('.main-container, .nav-media').removeClass('canvas-left');
        parent.$('.offset-menu-two').removeClass('is-active');
        $('.toggle-mnu').toggleClass('is-hidden');
    });

    $('#sub-list').on('click', function () {
        $('.aside-close').hide();
        $('.offset-menu-one').removeClass('is-active');         
        parent.$('.offset-menu-two').addClass('is-active');        
        return false;
    });

    $('#sub-list').on('click', function () {
        $('.aside-close').hide();
        $('.offset-menu-one').removeClass('is-active');         
        parent.$('.offset-menu-two').addClass('is-active');        
        return false;
    });
    
    $('.icon-arrow-left').on('click', function () {
        //$(this).hide();
        $('.aside-close').show();
        $('.offset-menu-one').addClass('is-active');        
        $('.offset-menu-two').removeClass('is-active');        
      });

    //timetravel
    $('.time-travel-btn, .time-travel-close').on('click', function () {
        $('.time-travel').toggleClass('is-active');        
        });
    
//    $('.time-travel-close').on('click', function () {
//        $('.time-travel').toggleClass('is-active'); 
//    });      
    

});