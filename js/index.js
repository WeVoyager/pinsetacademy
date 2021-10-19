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

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (isMobile()) {
    $('body').addClass('mobile');
  } else {
    $('body').addClass('pc');
  }

  //MOBILE BROWSER=======================================================
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setScreenSize();

  window.addEventListener('resize', () => setScreenSize());
  window.addEventListener('touchend', () => setScreenSize());

  //APPEND YOUTUBE SCHEDULE ===============================================
  var blogSc = $('.academySchedule').children().clone();

  $(blogSc[0]).text('핀셋 유튜브 아카데미 일정표');
  $(blogSc[0]).css('padding-top', '0');

  $(blogSc[1]).children().each(function (idx, el) {
    $(el).removeClass('blog');
    $(el).addClass('youtube');
  })

  $('.academySchedule').append(blogSc);

  $('.weekday.youtube h2').text('1기 핀셋 유튜브 평일반');
  $('.weekend.youtube h2').text('1기 핀셋 유튜브 주말반');

  const ytbWeekDay = ['일', '월', '화', '수', '목'],
    ytbWeekEnd = ['금', '토', '일', '월', '화'],
    ytbWeekDayDate = ['10/31', '11/1', '2', '3', '4', '7', '8', '9', '10', '11', '14', '15', '16', '17', '18', '21', '22', '23', '24', '25', '28', '29', '30', '12/1', '2'],
    ytbWeekEndDate = ['11/5', '6', '7', '8', '9', '12', '13', '14', '15', '16', '19', '20', '21', '22', '23', '26', '27', '28', '29', '30', '12/3', '4', '5', '6', '7'];

  $('.weekday.youtube .dayOfWeek li').each(function (idx, el) {
    $(el).children().text(ytbWeekDay[idx]);
  })

  $('.weekend.youtube .dayOfWeek li').each(function (idx, el) {
    $(el).children().text(ytbWeekEnd[idx]);
  })

  var week = $('.weekday.youtube .week1, .weekday.youtube .week2, .weekday.youtube .week3, .weekday.youtube .week4, .weekday.youtube .week5'),
    week2 = $('.weekend.youtube .week1, .weekend.youtube .week2, .weekend.youtube .week3, .weekend.youtube .week4, .weekend.youtube .week5');

  week.children().find('.day').each(function (idx, el) {
    $(el).text(ytbWeekDayDate[idx]);
  })

  week2.children().find('.day').each(function (idx, el) {
    $(el).text(ytbWeekEndDate[idx]);
  })


  //MODAL FUNCTION ----------------------------------------------------------------------
  //MODAL FUNCTION ----------------------------------------------------------------------
  var blogContent = $('.blogContent');
  var youtubeContent = $('.youtubeContent');

  //REVIEW IMG ARRAY ==========================================
  var reviewImg = ['../img/review01.jpg', '../img/review02.jpg', '../img/review03.jpg', '../img/review04.jpg', '../img/review05.jpg'],
    reviewLeft = '',
    reviewTop = '',
    reviewZidx = [],
    rotationImg = '',
    reviewFunc = '',
    reviewIdx = 0;

  $('.blogContent .review div').each(function (idx, el) {
    $(el).css('background', 'url(' + reviewImg[idx] + ') no-repeat center');
    reviewLeft += $(el).css('left') + ' ';
    reviewTop += $(el).css('top') + ' ';
    reviewZidx += $(el).css('z-index') + ' ';
    rotationImg += $(el).css('background-image').match(/img\/[\w\d]+\.\jpg/g);
  })

  reviewLeft = reviewLeft.split(" ");
  reviewTop = reviewTop.split(" ");
  reviewZidx = reviewZidx.split(" ");

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

  //INNER MODAL OPEN============================================
  function innerModal() {
    $('.listCont .customer').each(function (idx, el) {
      $(el).on('click', function () {
        $('.kakaoTalk').addClass('openClose');
        var imgUrl = $(this).find('.imgCont').css('background-image').match(/img\/[\w\d]+\.\jpg/g),
          title = $(this).find('p').text();
        $('.kakaoImg').css({
          'background': 'url("../' + imgUrl + '") top no-repeat',
          'background-size': 'cover'
        })
        $('.kakaoModal').find('h2').text(title);
      })
    })

    $('.close').on('click', function () {
      $('.kakaoTalk').removeClass('openClose');
    })

    $('.kakaoTalk').on('click', function () {
      $('.kakaoTalk').removeClass('openClose');
    })
  }


  //BLOG PROFILE FUNCTION =====================================
  function openBlog() {
    $('.alignCont').append(blogContent);

    $('.profile-detail').css('background', '#374fc9');

    $('.content-box .p-title h1').text('핀셋 블로그 대표강사');
    $('.content-box .p-title p').text('머니테이커');

    //REVIEW CHANGE EFFECT=================================================
    reviewFunc = setInterval(function () {
      $('.blogContent .review div:nth-of-type(1)').css({
        'top': '30px',
        'opacity': '0'
      });
      setTimeout(function () {
        $('.blogContent .review div:nth-of-type(1)').css({
          'top': reviewTop[3],
          'left': reviewLeft[3],
          'z-index': reviewZidx[3]
        });
        $cut = $('.blogContent .review div:nth-of-type(1)').detach();
        $('.blogContent .review div:nth-of-type(1), .blogContent .review div:nth-of-type(2), .blogContent .review div:nth-of-type(3)').each(function (idx, el) {
          $(el).css({
            'top': reviewTop[idx],
            'left': reviewLeft[idx],
            'z-index': reviewZidx[idx],
            'opacity': '1'
          })
        })
        $('.blogContent .review').append($cut);
      }, 250);
    }, 3000);

    if (isMobile()) {
      $('.cont-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        swipeToSlide: true,
        touchMove: true
      });

      $('.satis .listCont').slick({
        slidesToShow: 4,
        slidesToScroll: 5,
        infinite: false,
        arrows: false,
        swipeToSlide: true,
        touchMove: true
      });
    } else {
      $('.cont-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      });

      $('.satis .listCont').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        arrows: true
      });
    }
  }

  function closeBlog() {
    $('.cont-wrapper').slick('unslick');
    $('.satis .listCont').slick('unslick');
    clearInterval(reviewFunc);
  }
  //BLOG PROFILE FUNCTION =====================================

  //MODAL OPEN CLICK================================================
  function profileModal() {
    $('.mt-profile, .rs-profile').off().on('click', function () {
      $('.profile-detail').addClass('open-modal');
      $('html').css('overflow', 'hidden');
      if ($(this).hasClass('mt-profile')) {
        openBlog();
        innerModal();
      } else if ($(this).hasClass('rs-profile')) {
        $('.alignCont').append(youtubeContent);
        $('.profile-detail').css('background', '#ff416c');
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
    $('.profile-detail .closeBtn').off().on('click', function () {
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

  //NAVIGATION CLICK ===============================================>
  $('.nav a:nth-of-type(1), .nav a:nth-of-type(2)').on('click', function (e) {
    e.preventDefault();
    $('.profile-detail').addClass('open-modal');
    $('html').css('overflow', 'hidden');
    if ($(this).index() == 0) {
      openBlog();
      innerModal();
    } else {
      $('.alignCont').append(youtubeContent);
      $('.profile-detail').css('background', '#ff416c');
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

  $('.profile').on('mousemove', function (e) {
    if ($(this).hasClass('txtOp')) {
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

    if ($('.youtube-spec p:nth-of-type(1)').hasClass('active')) {
        onceUse();
    }
    if ($('.youtube-spec p:nth-of-type(2)').hasClass('active')) {
        onceUse2();
    }
    if ($('.youtube-spec p:nth-of-type(3)').hasClass('active')) {
        onceUse3();
    }
  });

  function once(fn, context){
    var result;
 
    return function() { 
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
 
        return result;
    };
  }

  var onceUse = once(function(){
    $('.youtube-spec p:nth-of-type(1) span').each(function () {
          Counter($(this));
    });
  })
  var onceUse2 = once(function(){
    $('.youtube-spec p:nth-of-type(2) span').each(function () {
          Counter($(this));
    });
  })
  var onceUse3 = once(function(){
    $('.youtube-spec p:nth-of-type(3) span').each(function () {
          Counter($(this));
    });
  })

  function Counter(obj) {

    // get the number
    var number = obj.text();
    obj.attr('data-number', number);

    // clear the HTML element
    obj.empty();

    // create an array from the text, prepare to identify which characters in the string are numbers
    var numChars = number.split("")
    var numArray = [];
    var setOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // for each number, create the animation elements
    for (var i = 0; i < numChars.length; i++) {
      if ($.inArray(parseInt(numChars[i], 10), setOfNumbers) != -1) {
        obj.append('<span class="digit-con"><strong class="digit' + numArray.length + '">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></strong></span>');
        numArray[numArray.length] = parseInt(numChars[i], 10);
      } else {
        obj.append('<span>' + numChars[i] + '</span>');
      }
    }

    // determine the height of each number for the animation
    var increment = obj.find('.digit-con').outerHeight();
    var speed = 2000;

    // animate each number
    setTimeout(function(){
    for (var i = 0; i < numArray.length; i++) {
      obj.find('.digit' + i).animate({
        top: -(increment * numArray[i])
      }, Math.round(speed / (1 + (i * 0.2))));
    }
    }, 200);

    // $("#animate").click(function(){
    //   $('.youtube-spec strong:nth-of-type(1)').eq(0).text($('.number').attr('data-number'));
    //   Counter($('.number').eq(0));
    // });
  }


});