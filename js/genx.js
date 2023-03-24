// header
let service = document.querySelector('#service');
let serviceList = document.querySelector('#services');
let about = document.querySelector('#about');
let aboutList = document.querySelector('#aboutUs');
let web_design = document.querySelector('#web-design');
let web_designList = document.querySelector('#web-design-list');
let android = document.querySelector('#android');
let androidList = document.querySelector('#android-app');

// =============== services
service.onmouseover = function(){
    serviceList.classList.add('show');
}
service.onmouseout = function(){
    serviceList.classList.remove('show');
}
serviceList.onmouseover = function(){
    serviceList.classList.add('show');
}
serviceList.onmouseout = function(){
    serviceList.classList.remove('show');
}
//================ about 
about.onmouseover = function(){
    aboutList.classList.add('show');
}
about.onmouseout = function(){
    aboutList.classList.remove('show');
}
aboutList.onmouseover = function(){
    aboutList.classList.add('show');
}
aboutList.onmouseout = function(){
    aboutList.classList.remove('show');
}
//================ web-design 
web_design.onmouseover = function(){
    web_designList.classList.add('show');
}
web_design.onmouseout = function(){
    web_designList.classList.remove('show');
}
web_designList.onmouseover = function(){
    web_designList.classList.add('show');
}
web_designList.onmouseout = function(){
    web_designList.classList.remove('show');
}
//================ android 
android.onmouseover = function(){
    androidList.classList.add('show');
}
android.onmouseout = function(){
    androidList.classList.remove('show');
}
androidList.onmouseover = function(){
    androidList.classList.add('show');
}
androidList.onmouseout = function(){
    androidList.classList.remove('show');
}



// ============================ slider ===============================
$( function(){
    
    var windowHieight = $(window).height(),
    navigationHeight = $('.navbar').innerHeight();

    $('.slider,.carousel-item,.carousel-item img').height(windowHieight - navigationHeight);
});


// ========================= slider-company-clients =======================
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