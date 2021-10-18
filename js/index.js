window.addEventListener("DOMContentLoaded", function () {
  var c1Txt = $(".s1-mt-c1 span").get(),
    c1Split = c1Txt[0].innerHTML.split(""),
    c2Txt = $(".s1-mt-c2 span").get(),
    c2Split = c2Txt[0].innerHTML.split(""),
    c4Txt = $(".s1-mt-c4 span").get(),
    c4Split = c4Txt[0].innerHTML.split(""),
    pC1Txt = $('#pinset-archademy .title h2 span').get(),
    pC1Split = pC1Txt[0].innerHTML.split(""),
    pC2Txt = $('#pinset-archademy .title p span').get(),
    pC2Split = pC2Txt[0].innerHTML.split("");


  //MODAL FUNCTION ----------------------------------------------------------------------
  //MODAL FUNCTION ----------------------------------------------------------------------
  var blogContent = $('.blogContent');
  var youtubeContent = $('.youtubeContent')

  $('.alignCont').empty();


  //MODAL OPEN ===========================================
  function fadeInContent() {
    $('.content-box').children().each(function (idx, el) {
      setTimeout(function () {
        $(el).css('opacity', '1');
      }, 300 * (idx / 2))
      $('.closeBtn').addClass('active');
    })
  }

  //MODAL CLOSE ===========================================
  function fadeOutContent() {
    $('.content-box').children().each(function (idx, el) {
      setTimeout(function () {
        $(el).css('opacity', '0');
      }, 100 * (idx / 2))
      $('.closeBtn').removeClass('rotate');
    })
  }

  $('.content-box').children().css({
    'opacity': '0',
    'transition': '.5s'
  })


  //BLOG PROFILE FUNCTION =====================================
  function openBlog(){
    $('.alignCont').append(blogContent);

    $('.profile-detail').css('background','#374fc9');

    $('.content-box .p-title h1').text('핀셋 블로그 대표강사');
    $('.content-box .p-title p').text('머니테이커')

    $('.cont-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true
    });
  
    $('.satis .listCont').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: false
    });
  }

  function closeBlog(){
    $('.cont-wrapper').slick('unslick');
    $('.satis .listCont').slick('unslick');
  }
  //BLOG PROFILE FUNCTION =====================================

  //MODAL OPEN CLICK================================================
  function profileModal() {
    $('.mt-profile, .rs-profile').on('click', function () {
      $('.profile-detail').addClass('open-modal');
      $('html').css('overflow', 'hidden');
      if($(this).hasClass('mt-profile')){
        openBlog();
      }else if($(this).hasClass('rs-profile')){
        $('.alignCont').append(youtubeContent);
        $('.profile-detail').css('background','#ff416c');
        $('.content-box .p-title h1').text('핀셋 유튜브 대표강사');
        $('.content-box .p-title p').text('러셀')
      }
      setTimeout(function () {
        $('.bg-skew').addClass('active');
        setTimeout(function () {
          fadeInContent();
          setTimeout(function () {
            $('.closeBtn').addClass('rotate');
          }, 500)
        }, 200)
      }, 500);
    })

    //MODAL CLOSE CLICK================================================
    $('.profile-detail .closeBtn').on('click', function () {
      fadeOutContent();
      setTimeout(function () {
        closeBlog();
        $('.alignCont').empty();
        $('.closeBtn').removeClass('active');
        setTimeout(function () {
          $('.bg-skew').removeClass('active');
          setTimeout(function () {
            $('.profile-detail').removeClass('open-modal');
            $('html').css('overflow', 'auto');
          }, 500)
        }, 200)
      }, 500);
    })
  }

  $('.profile').on('mousemove',function(e){
    if($(this).hasClass('txtOp')){
      profileModal();
    }
  })
  //MODAL FUNCTION ----------------------------------------------------------------------
  //MODAL FUNCTION ----------------------------------------------------------------------

  //CLEAR TITLE TEXT---------------------------------------------------------------------------------
  $(".s1-mt-c1").empty();
  $(".s1-mt-c2").empty();
  $(".s1-mt-c4").empty();
  $("#pinset-archademy .title h2").empty();
  $("#pinset-archademy .title p").empty();

  //APPEND TEXT IN TITLE FIRST LINE---------------------------------------------------------------------------------
  $.each(c1Split, function (idx, el) {
    if (el != " ") {
      if (idx == 5 || idx == 10 || idx == 15 || idx == 19) {
        $(".s1-mt-c1").append(
          "<span style='margin-left:1rem; transform:translateY(150%); opacity:0; transition:.5s'>" +
          el +
          "</span>"
        );
      } else {
        $(".s1-mt-c1").append(
          "<span style='transform:translateY(150%); opacity:0; transition:.5s'>" +
          el +
          "</span>"
        );
      }
    }
  });

  //APPEND TEXT IN TITLE SECOND LINE---------------------------------------------------------------------------------
  $.each(c2Split, function (idx, el) {
    if (el != " ") {
      $(".s1-mt-c2").append(
        "<span style='margin-left:1rem; transform:translateY(150%); opacity:0; transition:.5s'>" +
        el +
        "</span>"
      );
    }
  });

  //APPEND TEXT IN TITLE THIRD LINE---------------------------------------------------------------------------------
  $.each(c4Split, function (idx, el) {
    if (el != " ") {
      $(".s1-mt-c4").append(
        "<span style='margin-left:1rem; transform:translateY(150%); opacity:0; transition:.5s'>" +
        el +
        "</span>"
      );
    }
  });

  //APPEND TEXT IN PROFILE TITLE---------------------------------------------------------------------------------
  $.each(pC1Split, function (idx, el) {
    if (el != " ") {
      if (idx == 3 || idx == 5 || idx == 9 || idx == 12 || idx == 16) {
        $("#pinset-archademy .title h2").append(
          "<span style='margin-left:1rem; opacity:0; transition:.5s;'>" +
          el +
          "</span>"
        );
      } else {
        $("#pinset-archademy .title h2").append(
          "<span style='opacity:0; transition:.5s'>" +
          el +
          "</span>"
        );
      }
    }
  });

  //APPEND TEXT IN PROFILE SUBTITLE---------------------------------------------------------------------------------
  $.each(pC2Split, function (idx, el) {
    if (el != " ") {
      if (idx == 3 || idx == 9 || idx == 11 || idx == 15 || idx == 20 || idx == 26 || idx == 31) {
        $("#pinset-archademy .title p").append(
          "<span style='margin-left:1rem; opacity:0; transition:.5s;'>" +
          el +
          "</span>"
        );
      } else {
        $("#pinset-archademy .title p").append(
          "<span style='opacity:0; transition:.5s'>" +
          el +
          "</span>"
        );
      }
    }
  });

  //type Effect function---------------------------------------------------------------------------------
  function txtEffect(name, spd) {
    if ($("." + name + "").hasClass("active")) {
      $("." + name + " span").each(function (idx2, el2) {
        setTimeout(function () {
          $(el2).css({
            transform: "translateY(0)",
            opacity: "1",
            transition: ".5s",
          });
        }, (50 * idx2) / spd);
      });
    }
  }

  function txtEffect2(name, spd) {
    if ($(name).hasClass("active")) {
      $(name + " span").each(function (idx2, el2) {
        setTimeout(function () {
          $(el2).css({
            opacity: "1",
            transition: ".5s",
          });
        }, (40 * idx2) / spd);
      });
    }
  }

  //header Effect function---------------------------------------------------------------------------------
  function head() {
    $("header").addClass("active");
  }

  //SHADOW TEXT BOX Effect function---------------------------------------------------------------------------------
  function stb() {
    setTimeout(function () {
      if (this.document.querySelector("html").scrollTop == 0) {
        head();
      }
      $('.shadow').addClass('active');

      setTimeout(function () {
        $('.lm-txt').addClass('active')
        $('.rr-txt').addClass('active')

        setTimeout(function () {
          $('.scroll-down').addClass('active');
        }, 500);
      }, 800);
    }, 700)
  }

  //PEOPLE MOB Effect function---------------------------------------------------------------------------------
  function pMob() {
    setTimeout(function () {
      $(".mt, .rs").addClass("active");

      stb();
    }, 300);
  }

  //TITLE TEXT MOVE EFFECT function---------------------------------------------------------------------------------
  function mainTit() {
    $(".main-title")
      .children()
      .each(function (idx, el) {
        if (idx == 0) {
          setTimeout(function () {
            $(el).addClass("active");
            txtEffect("s1-mt-c1", 2);
          }, 100);
        } else if (idx == 1) {
          setTimeout(function () {
            $(el).addClass("active");

            txtEffect("s1-mt-c2", 1);
          }, 800);
        } else if (idx == 2) {
          setTimeout(function () {
            $(el).addClass("active");

            setTimeout(function () {
              $(".s1-mt-c3").addClass("pta");
            }, 300);
          }, 1500);
        } else if (idx == 3) {
          setTimeout(function () {
            $(el).addClass("active");

            txtEffect("s1-mt-c4", 1);

            pMob();
          }, 2000);
        }
      });
  }

  mainTit();

  //DomScroll Event------------------------------------------------------------------------------
  window.addEventListener("scroll", function () {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    if (this.document.querySelector("html").scrollTop > 0) {
      $("header").css("background", "rgba(0,0,0,0.7");
      $("header").addClass("active");
    } else {
      $("header").css("background", "rgba(0,0,0,0.2");
    }

    function tagTop(tagName) {
      tagName.each(function (idx, el) {
        var elChild = $(el).children();

        if (scrollBottom > elChild.offset().top && elChild.prop('tagName') === 'SPAN') {
          setTimeout(function () {
            $(el).addClass('active');
          }, 200)
        }
      })
    }

    var txtEff1 = $('.title-text, .youtube-spec').children(),
      txtEff2 = $('.s2-gl').children(),
      txtEff3 = $('.s2-em1, .s2-em2').children();

    tagTop(txtEff1);
    tagTop(txtEff2);
    tagTop(txtEff3);

    if (scrollBottom > $('.s2-help').children().offset().top) {
      setTimeout(function () {
        $('.s2-help').addClass('active');
      }, 200)
    };

    if (scrollBottom > $('#pinset-archademy .title h2').offset().top) {
      setTimeout(function () {
        $('#pinset-archademy .title h2').addClass('active');
        txtEffect2('#pinset-archademy .title h2', 1)
      }, 200)
    }

    if (scrollBottom > $('#pinset-archademy .title p').offset().top) {
      setTimeout(function () {
        $('#pinset-archademy .title p').addClass('active');
        txtEffect2('#pinset-archademy .title p', 1.8)
      }, 200)
    }

    if (scrollBottom > $('#pinset-archademy .profile').offset().top) {
      setTimeout(function () {
        $('#pinset-archademy .profile').addClass('opHalf');

        setTimeout(function () {
          $('#pinset-archademy .profile').addClass('conMove');

          setTimeout(function () {
            $('#pinset-archademy .profile').addClass('active');

            setTimeout(function () {
              $('#pinset-archademy .profile').addClass('txtMove');

              setTimeout(function () {
                $('#pinset-archademy .profile').addClass('txtOp');
              }, 300)
            }, 500)
          }, 700)
        }, 500)
      }, 800)
    }
  });
});