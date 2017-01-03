$(document).ready(function () {

    $('.main-carousel').flickity({
        // options
        cellAlign: 'center',
        wrapAround: true,
        contain: true,
        pageDots: false,
        autoPlay: 5500,
        pauseAutoPlayOnHover: true,
        imagesLoaded: true,
        lazyLoad: true,
        lazyLoad: 1,        
        percentPosition: true,
        prevNextButtons: false
        //setGallerySize: false
        
    });
    
$("#lightgallery").lightGallery({
    selector: '.lightgallery-item',
    thumbnail: false,
    html: true,
    counter: false
}); 
    $("#lightgallery-360").lightGallery({
    selector: '.lightgallery-item',
    thumbnail: false,
    html: true,
    counter: false
}); 

$("#video-gallery").lightGallery({
      selector: '.video-responsive-item',
      fullScreen: true,
      thumbnail: false,
//      videoAutoplay: true,
      videoMaxWidth: '90%',
//    selector: this,
//    vimeoThumbSize:'thumbnail_medium',
//    loadVimeoThumbnail: true
    
    //loadVimeoThumbnail: false
}); 

$("#video-gallery-360").lightGallery({
      selector: '.video-responsive-item',
      fullScreen: true,
      thumbnail: false,
//      videoAutoplay: true,
      videoMaxWidth: '90%'

}); 

    
});

//mousewheel main-carousel
//https://github.com/metafizzy/flickity/issues/44

/*
$('.main-carousel').mousewheel(function(e) {
    e.preventDefault();
    var flkty = Flickity.data(this);

    if (!window.wheeling) {
        // console.log('start wheeling!');

        if(e.deltaX > 0 || e.deltaY < 0){
            flkty.next();
        } else if(e.deltaX < 0 || e.deltaY > 0){
            flkty.previous();
        }
    }

    clearTimeout(window.wheeling);
    window.wheeling = setTimeout(function() {
        // console.log('stop wheeling!');

        delete window.wheeling;

        // reset wheeldelta
        window.wheeldelta.x = 0;
        window.wheeldelta.y = 0;
    }, 250);

    window.wheeldelta.x += e.deltaFactor * e.deltaX;
    window.wheeldelta.y += e.deltaFactor * e.deltaY;
    if(window.wheeldelta.x > 500 || window.wheeldelta.y > 500 || window.wheeldelta.x < -500 || window.wheeldelta.y < -500){
        window.wheeldelta.x = 0;
        window.wheeldelta.y = 0;

        if(e.deltaX > 0 || e.deltaY < 0){
            flkty.next();
        } else if(e.deltaX < 0 || e.deltaY > 0){
            flkty.previous();
        }
    }

    // console.log(window.wheeldelta);
});*/



//// Instantiate the Bootstrap carousel
//$('.multi-item-carousel').carousel({
//    interval: false
//});
//
//// for every slide in carousel, copy the next slide's item in the slide.
//// Do the same for the next, next item.
//$('.multi-item-carousel .item').each(function () {
//    var next = $(this).next();
//    if (!next.length) {
//        next = $(this).siblings(':first');
//    }
//    next.children(':first-child').clone().appendTo($(this));
//
//    if (next.next().length > 0) {
//        next.next().children(':first-child').clone().appendTo($(this));
//    } else {
//        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//    }
//});