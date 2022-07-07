$(document).ready(function () {
    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        arrows: false,
        dots: true,
    });
    $('.venobox').venobox();

    $('.team_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 900,
        arrows: false,
        dots: false,
    });
    $('.client_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 900,
        arrows: false,
        dots: true,
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.brand_logo').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 1000,
        prevArrow: '<i class="fa fa-chevron-left left_arrow"></i>',
        nextArrow: '<i class="fa fa-chevron-right right_arrow"></i>',

    });
    $navOffset=$('.navigation').offset().top;

$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navOffset){
       $('.navigation').addClass('menu_fixed');  
        }else{
       $('.navigation').removeClass('menu_fixed');
   }
// menu fixed ends 
    if($scrolling > 300){
      $('.top_to').fadeIn();
   }else{
       $('.top_to').fadeOut();
   }
});

$('.top_to').click(function(){
    $('html').animate({
        scrollTop:0
   }, 1200);
});
//    $(window).scroll(function(){
//      $scrolling=$(this).scrollTop();
//        if($scrolling>1){
//           $('.navigation').addClass('sticky');
//           }else{
//               $('.navigation').removeClass('sticky');
//           }
//        if($scrolling > 300){
//       $('.top_to').fadeIn();
//    }else{
//        $('.top_to').fadeOut();
//    }
//    });
//    $('.top_to').click(function(){
//    $('html').animate({
//        scrollTop:0
//    }, 1200);
//});
});
