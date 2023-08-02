$(document).ready(function(){

    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
    // banner slide
    //   var num = 0;
    //   setInterval(function(){
    //   num++;
    //   if (num > 3) {
    //     num = 0;
    //   }
    //   $(".banner_slide").css("left",-100*num+"%");
    //   $(".slide_bullet li").removeClass("on");
    //   $(".slide_bullet li").eq(num).addClass("on");
    // },4000);
    //
    // $(".slide_bullet li").click(function(){
    //   num = $(this).index();
    //   console.log(num);
    //   $(".slide_bullet li").removeClass("on");
    //   $(".slide_bullet li").eq(num).addClass("on");
    //   $(".banner_slide").css("left",-100*num+"%")
    // });




    //My page dl영역


    var sub1Height = $("dd.sub1").height();
    console.log(sub1Height);
    var ddPosTop = 70;
    var mainmenuHeight = 70;
    var result = sub1Height+ddPosTop+mainmenuHeight;
    console.log(result);
    $(".mypage_content > dl").css("height",result+"px");



    $(".mypage_content > dl > dt").click(function(){
      var ddHeight = $(this).next("dd").height();
      console.log(ddHeight);
      var ddPosTop = 70;
      var mainmenuHeight = 70;
      var result = ddHeight+ddPosTop+mainmenuHeight;
      console.log(result);
      $("dl").css("height",result+"px");
      var dt_class = $(this).attr("class");
      console.log(dt_class);
      $(".mypage_content > dl > dd").removeClass("on");
      $(".mypage_content > dl > dd"+"."+dt_class).addClass("on");

      if (dt_class == "sub1") {
        $(".current_bar").css("left","9%");
        // $("dl").css("height","824px");
      }else if (dt_class == "sub2") {
        $(".current_bar").css("left","42%");
        // $("dl").css("height","1140px");
      }else {
        $(".current_bar").css("left","76%");
        // $("dl").css("height","1040px");
      }
    });

    // 돋보기버튼 누르면 써치페이지 active
    $(".search_btn").click(function(){
      $(".search_wrap").addClass("active");
      $(".allmenu_wrap").removeClass("active");
      $(".main_menu").addClass("off");
      $(".wrap").css("height","100vh");
    });

    $(".back_btn").click(function(){
      $(".search_wrap").removeClass("active");
      $(".main_menu").removeClass("off");
      $(".wrap").css("height","auto");
    });

    // main_menu에 allmenu 누르면 올메뉴 페이지 active
    $(".allmenu_btn").click(function(){
      $(".allmenu_wrap").addClass("active");
      var allmenu_Height = $(".allmenu_wrap").height();
      $(".wrap").css("height",allmenu_Height+"px");
    });

    // movie 배너 기생충 누르면 디테일 페이지 active
    $(".detail_btn").click(function(){
      $(".detail_wrap").addClass("active");
      var detail_Height = $(".detail_wrap").height();
      $(".wrap").css("height",detail_Height+"px");
    });

    // 디테일 페이지 detail_back_btn 누르면 숨기기
    $(".detail_back_btn").click(function(){
      $(".detail_wrap").removeClass("active");
      $(".wrap").css("height","auto");
    });





    // 취향저격 별점주기
    $(".star_box span").click(function(){
      $(this).parent().children('span').removeClass('on');
      $(this).addClass('on').prevAll('span').addClass('on');
      return false;
    });



    // swiper plugin

    // function perviewReturn(){
    //   var perview = Math.floor(deviceWidth / 90);
    //   console.log(perview)
    //   return perview;
    // }
    //
    // $(window).resize(function(){
    //   deviceWidth = $(window).width();
    //   perviewReturn();
    // });

    var swiper1 = new Swiper('.swiper-container', {
      // slidesPerView: perviewReturn(),
      spaceBetween: 12,
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 6.5,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 7.5,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 9.5,
          spaceBetween: 12,
        },
      }
    });

    var swiper2 = new Swiper('.swiper-container1', {
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var swiper3 = new Swiper('.swiper-container2', {
      slidesPerView: "auto",
      spaceBetween: 0,
      freeMode: true,
      // breakpoints: {
      //   0: {
      //     slidesPerView: 4,
      //     spaceBetween: 0,
      //   },
      //   768: {
      //     slidesPerView: 7,
      //     spaceBetween: 12,
      //   },
      //   1024: {
      //     slidesPerView: 10,
      //     spaceBetween: 12,
      //   },
      // }
    });












});
