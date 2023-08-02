$(document).ready(function(){

  var deviceWidth = $(window).width();
  // console.log(deviceWidth);
  var deviceHeight = $(window).height();
  console.log(deviceHeight);
  $(".vid_frame").width(deviceWidth);   //.height(deviceHeight);
  $("#content_wrap > div").height(deviceHeight);

  var loadScroll = $(window).scrollTop();
  // console.log(loadScroll);
  $("#content_wrap > div").each(function(){
    console.log($(this).attr("class")+"영역 :" + $(this).offset().top)
    console.log("현재 스크롤 : " +loadScroll);
    if (loadScroll >= $(this).offset().top && loadScroll-deviceHeight <= $(this).offset().top ) {
      $(this).addClass("on");
    }
  });


  $("#content_wrap > div").on("mousewheel DOMMouseScroll",function(e){
      e.preventDefault();
      var evt = e.originalEvent;
      delta = 0;
      if (evt.detail) {
        // 브라우저가 파이어폭스인 경우
        delta = evt.detail * -40;
      }else{
        // 브라우저가 크롬,익스플로러,오페라인 경우
        delta = evt.wheelDelta;
      }

      if (delta>0) {
        // 마우스 휠을 올렸을 때 delta>0
        var target = "#" + $(this).prev().attr("id");
        // console.log(target);

        $(this).removeClass("on");
        $(this).prev().addClass("on");
        var obj_top = $(target).offset().top;
        // console.log(obj_top);
        $("html,body").clearQueue().animate({scrollTop:obj_top},1000);
      }else{
        // 마우스 휠을 내렸을 때 delta>0의 else
        var target = "#" + $(this).next().attr("id");
        // console.log(target);

        $(this).removeClass("on");
        $(this).next().addClass("on");
        // console.log($("#content_wrap >div"+target));
        var obj_top = $(target).offset().top;
        $("html,body").clearQueue().animate({scrollTop:obj_top},1000);
        // console.log(obj_top);
      }
    });

  // 스크롤사용시 탑메뉴 on클래스추가,사이드바 on클래스 추가
  $(window).scroll(function(){
  var current_top = $(window).scrollTop();
  // console.log(current_top);
  // home
  if (current_top < deviceHeight) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(0).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(0).addClass("on");
    $(".lds-circle").css("top","0px");
  }
    // profile
    else if (current_top < deviceHeight*2) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(1).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(1).addClass("on");
    $(".lds-circle").css("top","40px");
  }
    // skill
    else if (current_top < deviceHeight*3) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(2).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(2).addClass("on");
    $(".lds-circle").css("top","79px");

    progressAni("html_bar");
    progressAni("css_bar");
    progressAni("js_bar");
    progressAni("jq_bar");
    progressAni("ps_bar");
    progressAni("ai_bar");

  }
    // artwork01
    else if (current_top < deviceHeight*4) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(3).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".top_menu_2depth.art > li").eq(0).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(3).addClass("on");
    $(".art_child > li").removeClass("on");
    $(".art_child > li").eq(0).addClass("on");
    $(".lds-circle").css("top","140px");
  }
    // artwork02
    else if (current_top < deviceHeight*5) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(3).addClass("on");
    $(".top_menu_2depth.art li").removeClass("on");
    $(".top_menu_2depth.art > li").eq(1).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(3).addClass("on");
    $(".art_child > li").removeClass("on");
    $(".art_child > li").eq(1).addClass("on");
    $(".lds-circle").css("top","161px");
  }
    // artwork03
    else if (current_top < deviceHeight*6) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(3).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".top_menu_2depth.art > li").eq(2).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(3).addClass("on");
    $(".art_child > li").removeClass("on");
    $(".art_child > li").eq(2).addClass("on");
    $(".lds-circle").css("top","183px");
  }
    // web1
    else if (current_top < deviceHeight*7) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(4).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".top_menu_2depth.web > li").eq(0).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(4).addClass("on");
    $(".web_child > li").removeClass("on");
    $(".web_child > li").eq(0).addClass("on");
    $(".lds-circle").css("top","278px");
  }
    // web2
    else if (current_top < deviceHeight*8) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(4).addClass("on");
    $(".top_menu_2depth.web li").removeClass("on");
    $(".top_menu_2depth.web > li").eq(1).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(4).addClass("on");
    $(".web_child > li").removeClass("on");
    $(".web_child > li").eq(1).addClass("on");
    $(".lds-circle").css("top","300px");
  }
    // web3
    else if (current_top < deviceHeight*9) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(4).addClass("on");
    $(".top_menu_2depth.web li").removeClass("on");
    $(".top_menu_2depth.web > li").eq(2).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(4).addClass("on");
    $(".web_child > li").removeClass("on");
    $(".web_child > li").eq(2).addClass("on");
    $(".lds-circle").css("top","320px");
  }
    // web4
    else if (current_top < deviceHeight*10) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(4).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".top_menu_2depth.web > li").eq(3).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(4).addClass("on");
    $(".web_child > li").removeClass("on");
    $(".web_child > li").eq(3).addClass("on");
    $(".lds-circle").css("top","341px");

  }
  // app1
    else if (current_top < deviceHeight*11) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(5).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".top_menu_2depth.app > li").eq(0).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(5).addClass("on");
    $(".app_child > li").removeClass("on");
    $(".app_child > li").eq(0).addClass("on");
    $(".lds-circle").css("top","446px");
  }
    // app2
    else if (current_top < deviceHeight*12) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(5).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".top_menu_2depth.app > li").eq(1).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(5).addClass("on");
    $(".app_child > li").removeClass("on");
    $(".app_child > li").eq(1).addClass("on");
    $(".lds-circle").css("top","468px");
  }
    // app3
    else if (current_top < deviceHeight*13) {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(5).addClass("on");
    $(".top_menu_2depth.app").removeClass("on");
    $(".top_menu_2depth.app > li").eq(2).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(5).addClass("on");
    $(".app_child > li").removeClass("on");
    $(".app_child > li").eq(2).addClass("on");
    $(".lds-circle").css("top","506px");

  }
    else {
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(6).addClass("on");
    $(".top_menu_2depth li").removeClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(6).addClass("on");
    $(".text_box p:nth-of-type(1)").css("opacity","0");
    $(".text_box > .skill_bar > div").removeClass("on");
    $(".lds-circle").css("top","596px");
  }
  });


  // 탑메뉴 클릭액션- 탑메뉴 on클래스추가,사이드바 on클래스 추가,스크롤이동
  $(".top_menu > li > a").click(function(){
    var num = $(".top_menu > li > a").index(this);
    var move ="#"+ $(this).text();
    console.log(num);
    console.log(move);
    $(".top_menu > li").removeClass("on");
    $(".top_menu > li").eq(num).addClass("on");
    $(".sideBar_text > li").removeClass("on");
    $(".sideBar_text > li").eq(num).addClass("on");
    $("#content_wrap > div").removeClass("on");
    $("#content_wrap > div"+move).addClass("on");
    var moveHeight = $("#content_wrap > div"+move).offset().top;
    $("html,body").clearQueue().animate({scrollTop:moveHeight},1000);
  });


  $(".top_menu_2depth > li a").click(function(){
    var depth2_num = $(".top_menu_2depth > li a").index(this);
    var depth2_move ="."+ $(this).attr("class");
    console.log(depth2_num);
    console.log(depth2_move);
    $(".top_menu_2depth > li").removeClass("on");
    $(".top_menu_2depth > li").eq(depth2_num).addClass("on");
    $("#content_wrap > div").removeClass("on");
    $("#content_wrap > div"+depth2_move).addClass("on");
    var depthmove_Height = $("#content_wrap > div"+depth2_move).offset().top;
    $("html,body").clearQueue().animate({scrollTop:depthmove_Height},1000);
  });

  $(".sideBar_2depth > li a").click(function(){
    var depth2_num = $(".top_menu_2depth > li a").index(this);
    var depth2_move ="."+ $(this).attr("class");
    console.log(depth2_num);
    console.log(depth2_move);
    $(".top_menu_2depth > li").removeClass("on");
    $(".top_menu_2depth > li").eq(depth2_num).addClass("on");
    $("#content_wrap > div").removeClass("on");
    $("#content_wrap > div"+depth2_move).addClass("on");
    var depthmove_Height = $("#content_wrap > div"+depth2_move).offset().top;
    $("html,body").clearQueue().animate({scrollTop:depthmove_Height},1000);
  });


  // profile 페이지
  //프로필 이미지 변경
  $(".profile_left figure").mouseover(function(){
    $(".profile_left img.roni1").removeClass("on");
    $(".profile_left img.roni2").addClass("on");
  });
  $(".profile_left figure").mouseout(function(){
    $(".profile_left img.roni1").addClass("on");
    $(".profile_left img.roni2").removeClass("on");
  });


  //아트워크 콘텐츠를 누르면 자세한 내용 큰화면으로
  $(".artworks_right li").click(function(){
    var more = $(this).index();
    $(".artworks_detail.one").addClass("on");
    $(".artworks_detail > ul > li").eq(more).addClass("on");
    $(".popup1").addClass("off");
    return false;
  });

  $(".popup2 li").click(function(){
    var more2 = $(this).index();
    $(".artworks_detail.two").addClass("on");
    $(".artworks_detail.two > ul > li").eq(more2).addClass("on");
    $(".popup2").addClass("off");
    $(".artworks2_text").addClass("off");
    return false;
  });

  $(".artworks3 li").click(function(){
    var more3 = $(this).index();
    $(".artworks_detail.three").addClass("on");
    $(".artworks_detail.three > ul > li").eq(more3).addClass("on");
    $(".artworks3").addClass("off");
    return false;
  });

  $(".artworks_detail .close").click(function(){
    // console.log("click");
    $(".artworks_detail").removeClass("on");
    $(".artworks_detail > ul > li").removeClass("on");
    $(".popup1").removeClass("off");
    $(".popup2").removeClass("off");
    $(".artworks2_text").removeClass("off");
    $(".artworks3").removeClass("off");
    // $(".artworks_detail.two").removeClass("on");
    // $(".artworks_detail.two > ul > li").eq(more2).removeClass("on");
    return false;
  });

  var length = $(".title div").length;
  var timer;
  // console.log(length);

  var i=0;
  function animation(){
    $(".title div").eq(i).addClass("on");
    i++;
    if(i > 12){
      return false;
    }
  }
  setInterval(animation,200);


  function progressAni(classname){
    var percent = $("."+classname).children("span").text();
    $("."+classname).css("width",percent+"%");
    $("."+classname).children("span").css("left","95%");
    var num = 0;
    var timer = setInterval(function(){
      if (num < percent) {
        num++;
        $("."+classname).children("span").text(num+"%");
      }else {
        clearInterval(timer);
      }
    },50);
  }

  // 앱으로 연결 사이즈 지정
  function popup(){
      var url = "./appDesign/home.html";
      var name = "popup";
      var option = "width=375,height=667,scrollbars=no,left=300,top=300";
      window.open(url,name,option)
    }

    $(".appDirect").click(function(){
      popup();
    });











});
