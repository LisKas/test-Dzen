$( document ).ready(function() {

	 $('.about-slider').slick({
                    speed: 7000,
                    autoplay: false,
                    arrows: true,
                    prevArrow: '<img class="controls right-control slick-next" src="img/icon/slaid-right.png">', 
                    nextArrow:    '<img class="controls left-control slick-prev" src="img/icon/slaid-left.png">',

                });
// ////////////////////////////

     $('.btn').hover(function() {
    $(this).closest('.price').find('.price-title').toggleClass('hover');
    });

     
// ////////////////////////////
    $('.slider-for').slick({
       speed: 7000,
      // autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      // fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      
      prevArrow: '<img class="controls right-control slick-next " src="img/icon/slaid-right-sm.png">', 
      nextArrow:    '<img class="controls left-control slick-prev" src="img/icon/slaid-lef-sm.png">',
      // centerMode: true,
      // focusOnSelect: true
    });
////////////////////////////
$(".menu-click").click(function() {
    $("ul").slideToggle("slow");
     
    });

// $(".menu-click").click(function(){
//        $(this).children("ul").fadeToggle("slow");
                    
//         $(this).toggleClass("active");
          
//     });


// ///////////////////////////
       });