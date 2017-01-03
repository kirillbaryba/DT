$(function () {

    //modal transaction close/continue alert    
    $('#modal-transaction-close, .btn-modal-continue').on('click', function () {
        $('.modal-backdrop-transaction').toggleClass('hide');
    });


    //open share caption-tile    
    function toggleShareOpen() {
        $('.share-open').on('click', function () {  
            var btnFind = $(this);
            
            if (btnFind.toggleClass('is-active')) {
                btnFind.addClass('hide');
                btnFind.parents().eq(1).removeClass('is-active').addClass('hide');
                btnFind.parents().eq(2).find('.caption-share-full').removeClass('hide').addClass('is-active');
            } else {
                btnFind.removeClass('is-active').hasClass('hide');
            }
        });
    }
    toggleShareOpen();

    //close share caption-tile    
    function toggleShareClose() {
        $('.share-close').on('click', function () {  
            var btnFind = $(this);
            
            if (btnFind.toggleClass('is-active')) {
                btnFind.parents().eq(2).removeClass('is-active').addClass('hide');
                btnFind.parents().eq(3).find('.product-caption').removeClass('hide').addClass('is-active');
                btnFind.parents().eq(3).find('.share-open').removeClass('hide').addClass('is-active');
            } else {
                btnFind.removeClass('is-active').hasClass('hide');
            }
        });
    }
    toggleShareClose();
    
    
    //main-stream tile popover     
    function showIilePopover(){        
            $('#main-tile-over').mouseover(function(){                
                $('.tile-label').hide();
                $('#main-tile-popover').removeClass('hide');
                $('#main-tile-popover').addClass('is-active');                                            
          });
                
        $('#main-tile-over').mouseout(function(){
            $('#main-tile-popover').removeClass('is-active');
            $('#main-tile-popover').addClass('hide');        
            $('.tile-label').show();
        });
    }
    
    showIilePopover();
    

    /*
    $('.open-window').on('click', function() {
        if (!$('.footer-popover').is(':visible')) {
            //
            $('footer').removeClass('popover-color').addClass('popover-color');
            $('.footer-popover').show();
        }
            
  
        $('.footer-popover .popover-text').removeClass('hide').addClass('hide');
        $('.footer-popover #text-'+$(this).attr('id')).removeClass('hide');
        return false;
    })
    
    $('.close-popover').on('click', function(){
         $('.footer-popover').hide();
        $('footer').removeClass('popover-color');
        return false;
    })*/

    /*  
      //aside menu
    $('[data-toggle=offcanvas]').on('click', function () {
        $('.row-offcanvas').toggleClass('active');
    });*/

    /*affix activate sidebar */
    /*$('#sidebarmenu').affix({
      offset: {
          top: 50
      }
  });
*/
    //modal transaction close    
    $('.transaction-close').on('click', function () {
        $('.modal-backdrop-transaction').fadeIn('fast').toggleClass('hide');
        //$('#backdrop-modal').modal('toggle');
        //$('#backdrop-modal').toggleClass('hide');
        //$('.modal-backdrop').modal('hide');        
    });

    //modal transaction close/continue alert    
    $('#modal-transaction-close, .btn-modal-continue').on('click', function () {
        $('.modal-backdrop-transaction').toggleClass('hide');
    });

    //modal transaction close/continue alert    
    $('.btn-modal-save-draft').on('click', function () {
        $('#backdrop-modal').toggleClass('hide');
        $('.modal-backdrop').modal('hide');
    });



    $('#btn-toggle-mobile').on('click', function () {
        $('.main-login').toggleClass('offcanvas-right');

        //        if($('.modal-backdrop').is('.hide')){
        //            $('.modal-backdrop').removeClass('hide').addClass('fade in');
        //        }
        //            else{
        //                $('.modal-backdrop').removeClass('fade in').addClass('hide');
        //            }
        $('.menu-backdrop').fadeIn('fast').toggleClass('hide');
    });


    $('.btn-toggle').on('click', function () {

        $('#toolbar, #main-list').toggleClass('full-width');
        $('#sidebar').toggleClass('menu-sm');
        //        if ($('.sidebar-right').is('.menu-sm')) 
        //        {            
        //            $('.sidebar-right').removeClass('menu-sm');            
        //        } else {
        //            $('.sidebar-right').removeClass('menu-sm').addClass('menu-sm');
        //            $('.main-toolbar').removeClass('full-width');
        //        }


        /*$('.sidebar-right').addClass('menu-sm');           
        
                    if($('.btn-toggle')).is('click'){                     
                        $('.sidebar-right').removeClass('menu-sm');
                    } */
    })


    /*$(document).on('click', '.clickable', function () {
        $(this).addClass('grown').removeClass('spot');
    }).on('click', '.close_button', function (e) {
        e.stopPropagation();
        $(this).closest('.clickable').removeClass('grown').addClass('spot');
    });*/


});


/*-- off-canvas -- */

/*
 * Uses jQuery!!!!111one
 */


/*====================================
=            ON DOM READY            =
====================================*/
$(function () {

    // Toggle Nav on Click
    $('.toggle-nav').click(function () {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });


});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

/*========================================
=            ajax typeahead search       =
========================================*/
/*
   $('#live-search').typeahead({
        source: [
            { id: 1, name: 'Toronto' },
            { id: 2, name: 'Montreal' },
            { id: 3, name: 'New York' },
            { id: 4, name: 'Buffalo' },
            { id: 5, name: 'Boston' },
            { id: 6, name: 'Columbus' },
            { id: 7, name: 'Dallas' },
            { id: 8, name: 'Vancouver' },
            { id: 9, name: 'Seattle' },
            { id: 10, name: 'Los Angeles' }
        ]
    });
*/