//jQuery to collapse the navbar on scroll
/*$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});*/

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function () {
    $('.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        
         var getHref = $($anchor.attr('href'))[0].id;
        $('#' + getHref +' a').click();
        //$('.model-media-tabs').find('li').removeClass('active');        
        //$($anchor.attr('href')).addClass('active');
        
        $('html, body').animate({            
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
//    $('.media-all').affix({
//      offset: {
//        top: $('header').height()
//      }
//});	

$('.nav-media').affix({
      offset: {
        top: 100
      }
});	

});