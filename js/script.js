$(".navbar > .nav").addClass("mobile-nav");
$('.menu-toggle').click(function(){
    $(this).toggleClass("is-active");
    $(".navbar > .nav").toggleClass("mobile-nav");
});

$('.nav-item').click(function(){
    $('.nav-item').removeClass("selected");
    $(this).addClass("selected");  // show current page in menu
    $('.menu-toggle').click();
});