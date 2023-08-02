$(document).ready(function(){

  // header gnb 2depth
  $(".gnb").mouseover(function(){
    $(".depth2").addClass("on");
  });
  $(".gnb").mouseout(function(){
    $(".depth2").removeClass("on");
  });
  $(".depth2").mouseover(function(){
    $(".depth2").addClass("on");
  });
  $(".depth2").mouseout(function(){
    $(".depth2").removeClass("on");
  });

  // top_banner 스크롤하면 올라가는 효과
  $(window).scroll(function(){
    var scroll_height = $(window).scrollTop();
    if (scroll_height > 100) {
      $(".top_banner").addClass("over");
    }
  });


  // 메인베너
  // btn_next -slide_banner moving
  var num = 0;
  setInterval(function(){
    num++;
    if(num > 4){
      num = 0;
    }
    $(".slide_img").css("transform","translateX("+(-20*num)+"%)");
    $(".slide_bullet li a").removeClass("on");
    $(".slide_bullet li a").eq(num).addClass("on");
  },5000);

  $(".btn_next").click(function(){
    num++;
    if(num > 4){
      num = 0;
    }
    $(".slide_bullet li a").removeClass("on");
    $(".slide_bullet li a").eq(num).addClass("on");
    $(".slide_img").css("transform","translateX("+(-20*num)+"%)");
    return false;
  });

  // btn_prev -slide_banner moving
  $(".btn_prev").click(function(){
    num = num-1;
    if(num < 0){
      num = 4;
    }
    $(".slide_bullet li a").removeClass("on");
    $(".slide_bullet li a").eq(num).addClass("on");
    $(".slide_img").css("transform","translateX("+(-20*num)+"%)");
    return false;
  });

  // slide_bullet -slide_banner moving
  $(".slide_bullet li").click(function(){
    num = $(".slide_bullet li").index(this)
    $(".slide_img").css("transform","translateX("+(-20*num)+"%)");
    return false;
  });

  // slide_bullet color
  $(".slide_bullet li").click(function(){
    num = $(".slide_bullet li").index(this)
    $(".slide_bullet li a").removeClass("on");
    $(".slide_bullet li a").eq(num).addClass("on");
    return false;
  });



  // event_slide - bullet
  var a = 0;
  $(".event_bullet li").click(function(){
    a = $(".event_bullet li").index(this);
    $(".event_list").css("transform","translateX("+(-50*a)+"%)");
    return false;
  });

  // event_slide - bullet color
  $(".event_bullet li").click(function(){
    $(".event_bullet li a").removeClass("on");
    a = $(".event_bullet li").index(this);
    $(".event_bullet li a").eq(a).addClass("on");
    return false;
  });




  // insta_slide - btn_next
  var b = 0;
  $(".button_right").click(function(){
    b++;
    if (b > 3) {
      b = 0;
    }
    $(".list").css("transform","translateX("+(-1214*b)+"px)");
    return false;
  });

  $(".button_left").click(function(){
    b = b-1;
    if (b < 0) {
      b = 3;
    }
    $(".list").css("transform","translateX("+(-1214*b)+"px)");
    return false;
  });

  // footer sitelist
  $(".site").click(function(){
    $(".sitelist").toggleClass("on");
    return false;
  });















});
