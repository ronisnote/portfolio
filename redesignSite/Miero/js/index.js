$(document).ready(function(){

  var num = 0;
  $(".btn_next").click(function(){
    num++;
    if (num > 2) {
      num = 0;
    }
    $(".slidelist > li").removeClass("on");
    $(".slidelist > li").eq(num).addClass("on");
    $(".slide_bullet > li > a").removeClass("on");
    $(".slide_bullet > li > a").eq(num).addClass("on");
  });

  $(".btn_prev").click(function(){
    num = num-1;
    if (num < 0) {
      num = 2;
    }
    $(".slidelist > li").removeClass("on");
    $(".slidelist > li").eq(num).addClass("on");
    $(".slide_bullet > li > a").removeClass("on");
    $(".slide_bullet > li > a").eq(num).addClass("on");
  });

  $(".slide_bullet li").click(function(){
    num = $(".slide_bullet li").index(this);
    $(".slidelist > li").removeClass("on");
    $(".slidelist > li").eq(num).addClass("on");
    $(".slide_bullet > li > a").removeClass("on");
    $(".slide_bullet > li > a").eq(num).addClass("on");
  });

  var timer = setInterval(function(){
    num++;
    if (num > 2) {
      num = 0;
    }
    $(".slidelist > li").removeClass("on");
    $(".slidelist > li").eq(num).addClass("on");
    $(".slide_bullet > li > a").removeClass("on");
    $(".slide_bullet > li > a").eq(num).addClass("on");
  },4000);

  $(".slidelist").mouseenter(function(){
    clearInterval(timer);
  });


  $("slidelist").mouseleave(function(){
    timer = setInterval(function(){
      num++;
      if (num > 2) {
        num = 0;
      }
      $(".slidelist > li").removeClass("on");
      $(".slidelist > li").eq(num).addClass("on");
      $(".slide_bullet > li > a").removeClass("on");
      $(".slide_bullet > li > a").eq(num).addClass("on");
    },3000);
  });



});
