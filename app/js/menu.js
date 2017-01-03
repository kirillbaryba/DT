$(document).ready(function () {

    $('.toggle-mnu').on('click', function () {
        $(this).addClass('is-hidden');
        $('.main-container, .nav-media').find('.backdrop.fade').addClass('in');
        $('.arrow-back-link').fadeOut();
        if (window.location.pathname == '/article') {
            $('.icon-close').hide();
            $('.offset-menu-two').addClass('is-active');
        } else {
            $('.offset-menu-one').addClass('is-active');
        }
        $('.main-container, .nav-media, .alert-cookie').addClass('canvas-left');

        $('body').css({
            //            'overflow': 'hidden',
            'width': $(window).width(),
            //            'height': $(window).height()
        });
        $('html').css({
            'overflow': 'hidden',
            'width': $(window).width(),
            //            'height': $(window).height()
        });
    });

    //close dropdown on click outside    
    //$(window).click(function() {
    //        //Hide the menus if visible
    //});
    //
    //$('#menucontainer').click(function(event){
    //    event.stopPropagation();
    //});

    //    $(window).resize(function () {
    //        $('body').css({
    //            'width': $(window).width(),
    //            'height': $(window).height()
    //        });
    //    });

    //set fixed cookie panel
    //    if('.alert-cookie:visible'){
    //        $('.main-container').css({
    //               'height': 'calc(100vh - 39px)',
    //               'min-height': 'calc(100vh - 39px)',
    //        });
    //    }  
    //    
    //    $('.alert-cookie-close').on('click', function(){
    //        $('.alert-cookie').slideUp('fast');
    //            $('.main-container').css({
    //              'height': '100vh',
    //               'min-height': '100vh',
    //                'transition': 'none'
    //        });    
    //        });


    //testing device pixel ratio        
    //var dpr   = window.devicePixelRatio;
    //alert('Device Pixel Ratio: ' + dpr);


    //    //detect mobile device OS
    //
    //    var isMobile = {
    //        Android: function () {
    //            return navigator.userAgent.match(/Android/i);
    //        },
    //        BlackBerry: function () {
    //            return navigator.userAgent.match(/BlackBerry/i);
    //        },
    //        iOS: function () {
    //            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    //        },
    //        Opera: function () {
    //            return navigator.userAgent.match(/Opera Mini/i);
    //        },
    //        Windows: function () {
    //            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    //        },
    //        any: function () {
    //            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    //        }
    //    };
    //    
    //        if( isMobile.iOS() )
    //            alert('iOS');
    //        $('.get-app-ios:visible');
    //        
    //        if( isMobile.Android() )
    //            alert('Android');
    //        $('.get-app-android:visible');
    //    
    //        if( isMobile.Windows() )            
    //        $('.get-app-device:visible').hide();

    //    // Touch Device Detection
    //	var isTouchDevice = 'ontouchstart' in document.documentElement;
    //	if( isTouchDevice ) {
    //		$('body').removeClass('no-touch');
    //	}

    //    // ios safari bounce effect
    //    $('body').on('touchmove', function(event) {
    //        event.preventDefault();
    //    });   

    //
    //    $('html').on('touchmove', function () {
    //        $(this).removeAttr('style');
    //    });


    $('.backdrop').on('click', function () {
        $('.main-container, .nav-media, .alert-cookie').removeClass('canvas-left');
        $('.toggle-mnu').removeClass('is-hidden');
        $('.arrow-back-link').fadeIn();
        $('body').find('.backdrop.fade').removeClass('in');
        $('html, body').removeAttr('style');
    });


    $('.aside-close').on('click', function () {
        $('.main-container, .nav-media, .alert-cookie').removeClass('canvas-left');
        $('.main-container, .nav-media').find('.backdrop.fade').removeClass('in');
        $('html, body').removeAttr('style');
        $('.offset-menu-two').removeClass('is-active');
        $('.toggle-mnu').removeClass('is-hidden').addClass('is-active');
        $('.arrow-back-link').fadeIn();
    });
    //disable bounce effect
    //    document.ontouchmove = function(e) {e.preventDefault()};

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

});


//menu input switcher    
function inputSwitcher(obj) {
    var inputSwitcher = $('.m-search').find('.m-search-dt');
    $(obj).hide();
    inputSwitcher.removeClass('hide');
    return false;
};