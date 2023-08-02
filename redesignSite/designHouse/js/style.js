$(document).ready(function(){

  // 슬라이드 배너
  var ban = 0;
  setInterval(function(){
    ban++;
    if (ban > 3) {
      ban = 0;
    }
    $(".bannerlist").css("top",(-889*ban)+"px")
    $(".banner_bullet li").removeClass("active");
    $(".banner_bullet li").eq(ban).addClass("active");
  },4000);

  $(".banner_bullet li").click(function(){
    ban = $(".banner_bullet li").index(this);
    $(".bannerlist").css("top",(-889*ban)+"px");
    $(".banner_bullet li").removeClass("active");
    $(".banner_bullet li").eq(b).addClass("active");
  });


// content_main 더보기
  //
  var num = 1;
  $(".more_btn").click(function(){
    num++;
    reser(num);
    // $(".con1 > ul > li").eq(num).addClass("on");
    // $(".con2 > ul > li").eq(num).addClass("on");
    // $(".con3 > ul > li").eq(num).addClass("on");
    // $(".con4 > ul > li").eq(num).addClass("on");
    return false;
  });

  function reser(number){
    for(var i=1; i<5 ; i++){
      $(".con"+i+" > ul > li").eq(num).addClass("on");
    }
    var timer_re = setTimeout(function(){
      $(".con1 > ul > li").eq(number).addClass("active");
      $(".con2 > ul > li").eq(number).addClass("active");
      $(".con3 > ul > li").eq(number).addClass("active");
      $(".con4 > ul > li").eq(number).addClass("active");
    },150);
  }




  // class slide
  var cl = 0;
  setInterval(function(){
    cl++;
    if (cl > 3) {
      cl = 0;
    }
    $(".classlist li").removeClass("on");
    $(".classlist li").eq(cl).addClass("on");
    $(".class_btn li").removeClass("on");
    $(".class_btn li").eq(cl).addClass("on");
  },4000);

  $(".class_btn li").click(function(){
    cl = $(".class_btn li").index(this);

    $(".classlist li").removeClass("on");
    $(".classlist li").eq(cl).addClass("on");
    $(".class_btn li").removeClass("on");
    $(".class_btn li").eq(cl).addClass("on");
    return false;
  });

  // event 슬라이드
  var ev = 0;
  setInterval(function(){
    ev++;
    if (ev > 2) {
      ev = 0;
    }
    $(".event_slide li").removeClass("on");
    $(".event_slide li").eq(ev).addClass("on");
    $(".slide_bullet li").removeClass("active");
    $(".slide_bullet li").eq(ev).addClass("active");
  },2000);









  });
