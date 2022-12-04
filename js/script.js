$(document).ready(function(){
  $('.header__burger,.menu-link').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

});

let slide = $('.grid-insights__item'),
   slider = $('.insights__grid'),
   countSlide = slide.length,
   position = 0,
   shag = 590,
   widthWindow = $(window).width(),
   max = (countSlide*590)-widthWindow;

slider.width(590*countSlide);

$('.next').click(function(){
  console.log("Позиция:"+position)
  console.log("Максимум:"+max)
  if (position < -max){
    position = 0;
    slider.css("left",position+'px');

  }else{
    position = position-shag;
    slider.css("left",position+"px");
    
  }
});
$('.prev').click(function(){
  if (position > 0){
    position = -max;
    slider.css('left',position+'px');
  }else{
    position = position+shag;
    slider.css('left',position+"px");
  }
});