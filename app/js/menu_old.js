$(document).ready(function () {

    var backdrop = $('<div class="modal-backdrop in"></div>');
    
    $('.toggle-mnu').on('click', function () {
        $(this).addClass('is-hidden');
        $('.offset-menu-one').addClass('is-active');
        $('.main-wrapper').addClass('canvas-left');                            
        backdrop.appendTo('.main-wrapper');                                  
        
    });
    
      $(backdrop).on('click', function () {
            $(this).remove();      
      });
    
    
    $('.aside-close').on('click', function () {
       // parent.$('.main-container, .nav-media').removeClass('canvas-left');                
        $('.main-wrapper').removeClass('canvas-left');                
        $('.main-wrapper').find(backdrop).remove();
        $('.offset-menu-two').removeClass('is-active');
        $('.toggle-mnu').toggleClass('is-hidden');
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