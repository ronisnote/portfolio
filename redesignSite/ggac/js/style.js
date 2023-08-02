$(document).ready(function(){

    // gnb hover하면 2depth
    function gnbShow(){
      $(".depth2").addClass("show");
      $(".inner_depth2").addClass("show");
    }
    function gnbHide(){
      $(".depth2").removeClass("show");
      $(".inner_depth2").removeClass("show");
    }

    $("header .gnb").mouseenter(function(){
      gnbShow();
    });
    $("header").mouseleave(function(){
      gnbHide();
    });


    // header 2depth 우측 미니 슬라이드
    var m = 0;
    var pause = setInterval(function(){
      m++;
      if (m > 3) {
        m = 0;
      }
      $(".slide_list").css("left",(-210*m)+"px");
      $(".slide_btn ul li").removeClass("on");
      $(".slide_btn ul li").eq(m).addClass("on");
    },3000);

    $(".slide_btn ul li").click(function(){
      m = $(".slide_btn ul li").index(this);
      $(".slide_btn ul li").removeClass("on");
      $(".slide_btn ul li").eq(m).addClass("on");
      $(".slide_list").css("left",(-210*m)+"px");
    });

    $(".slide_list").mouseover(function(){
      clearInterval(pause);
      return false;
    });

    $(".slide_list").mouseleave(function(){
      pause = setInterval(function(){
        m++;
        if (m > 3) {
          m = 0;
        }
        $(".slide_list").css("left",(-210*m)+"px");
        $(".slide_btn ul li").removeClass("on");
        $(".slide_btn ul li").eq(m).addClass("on");
      },3000);
    });



  // 배너 banner_slide
  var b = 0;
  var play = setInterval(function(){
    b++;
    if (b > 3) {
      b = 0;
      $(".continue_bar li").removeClass("active");
    }
    $(".bannerslide li").removeClass("on");
    $(".bannerslide li").eq(b).addClass("on");
    $(".continue_bar li").eq(b).addClass("active");
  },5000);

  $(".visual_controller .pause").click(function(){
    clearInterval(play);
    $(".visual_controller .pause").removeClass("on");
    $(".visual_controller .play").addClass("on");
    return false;
  });

  $(".visual_controller .play").click(function(){
    play = setInterval(function(){
      b++;
      if (b > 3) {
        b = 0;
        $(".continue_bar li").removeClass("active");
      }
      $(".bannerslide li").removeClass("on");
      $(".bannerslide li").eq(b).addClass("on");
      $(".continue_bar li").eq(b).addClass("active");
    },5000);
    $(".visual_controller .play").removeClass("on");
    $(".visual_controller .pause").addClass("on");
  });

  $(".banner_next").click(function(){
    b++;
    if (b > 3) {
      b = 0;
      $(".continue_bar li").removeClass("active");
    }
    $(".bannerslide li").removeClass("on");
    $(".bannerslide li").eq(b).addClass("on");
    $(".continue_bar li").eq(b).addClass("active");
    return false;
  });

  $(".banner_prev").click(function(){
    $(".bannerslide li").removeClass("on");
    b++;
    if (b < 0) {
      b = 3;
      $(".continue_bar li").removeClass("active");
    }
    $(".bannerslide li").removeClass("on");
    $(".bannerslide li").eq(b).addClass("on");
    $(".continue_bar li").eq(b).addClass("active");
  });


  // 공연일정 year
  $(".year").click(function(){
    $(".year ul").toggleClass("show");
    return false;
  });

  // 공연일정 전체보기
  $(".select").click(function(){
    $(".show_list").toggleClass("show");
    // $(".year ul").slideToggle(600);
    return false;
  });


  //공연일정 콘텐츠 슬라이드
  var c = 0;
  $(".sch_next").click(function(){
    c++
    if (c > 11) {
      c = 0;
    }
    $(".monthBtn li").removeClass("on");
    $(".monthBtn li").eq(c).addClass("on");
    $(".sch_contentlist").css("left",(-1330*c)+"px");
    return false;
  });

  $(".sch_prev").click(function(){
    c = c-1;
    if (c < 0) {
      c = 11;
    }
    $(".monthBtn li").removeClass("on");
    $(".monthBtn li").eq(c).addClass("on");
    $(".sch_contentlist").css("left",(-1330*c)+"px")
    return false;
  });

  $(".monthBtn li").click(function(){
    c = $(".monthBtn li").index(this);
    $(".monthBtn li").removeClass("on");
    $(".monthBtn li").eq(c).addClass("on");
    $(".sch_contentlist").css("left",(-1330*c)+"px");
    return false;
  });


  // GGAC News 탭
  $(".menu li").click(function(){
    var t = $(".menu li").index(this);
    $(".menu li").removeClass("on");
    $(".menu li").eq(t).addClass("on");
    $(".inform_tab > li").removeClass("on");
    $(".inform_tab > li").eq(t).addClass("on");
    return false;
  });


  // GGAC 알리미 notice_slide
  var num = 0;
  var timer = setInterval(function(){
  num++;
  if (num > 3) {
    num = 0;
  }
    $(".notice_slidelist").css("left",(-100*num)+"%");
  },3000);

  $(".notice_pause").click(function(){
    clearInterval(timer);
    return false;
  });

  $(".notice_next").click(function(){
    num++;
    if (num > 3) {
      num = 0;
    }
    $(".notice_slidelist").css("left",(-100*num)+"%");
    return false;
  });

  $(".notice_prev").click(function(){
    num = num-1;
    if (num < 0) {
      num = 3;
    }
    $(".notice_slidelist").css("left",(-100*num)+"%");
    return false;
  });


  // 경기도 예술단 소개
  // 경기도 예술단 소개 이미지 슬라이드
  var i = 0;
  $(".intro_next").click(function(){
    i++;
    if (i > 4) {
      i = 0;
    }
    $(".intro_slidelist").css("left",(-1270*i)+"px");
    $(".intro_menu li").removeClass("on");
    $(".intro_menu li").eq(i).addClass("on");
    return false;
  });

  $(".intro_prev").click(function(){
    i = i-1;
    if (i < 0) {
      i = 4;
    }
    $(".intro_slidelist").css("left",(-1270*i)+"px");
    $(".intro_menu li").removeClass("on");
    $(".intro_menu li").eq(i).addClass("on");
    return false;
  });

  $(".intro_menu li").click(function(){
    i = $(".intro_menu li").index(this);
    $(".intro_slidelist").css("left",(-1270*i)+"px");
    $(".intro_menu li").removeClass("on");
    $(".intro_menu li").eq(i).addClass("on");
    return false;
  });


  // GGAC STORY-insta list 슬라이드
  var insta = 0;
  $(".instalink_next").click(function(){
    insta++;
    if (insta > 3) {
      insta = 0;
    }
    $(".insta_link").css("left",(-866*insta)+"px");
    return false;
  });

  var insta = 0;
  $(".instalink_prev").click(function(){
    insta = insta-1;
    if (insta < 0) {
      insta = 3;
    }
    $(".insta_link").css("left",(-866*insta)+"px");
    return false;
  });

  // quick_menu 탑버튼
  $(".top figure").click(function(){
    $("html,body").animate({scrollTop:0},800);
  });







});
