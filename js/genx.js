// ============= slider ==============
$( function(){
    
    var windowHieight = $(window).height(),
    navigationHeight = $('.navbar').innerHeight();

    $('.slider,.carousel-item,.carousel-item img').height(windowHieight - navigationHeight);
});

// ============== slider-company-clients ============
$('.slid').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
});

// ============== loading ==============
$(window).on('load', function () {
            
    $(".loading img").fadeOut(2000, function(){
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(1000, function(){
            $(this).remove();
        });
    });
})