/*Хедер*/

$(document).ready(function () {
  $(".header__menu").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header").removeClass("fixed");
      $(".header-mobile").removeClass("active");
      $("body").removeClass("ov-hid");
    } else {
      $(".header").addClass("fixed");
      $(".header__menu").addClass("active");
      $(".header-mobile").addClass("active");
      $("body").addClass("ov-hid");
    }
  });

  $(document).scroll(function () {
    if ($(window).scrollTop() >= $(".header").height()) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  /*$(".main-page > .swiper-container .swiper-slide").on(
    "mousewheel",
    function (e) {
      var screenWidth = $(window).width();
      if (screenWidth < 1200) {
        $(".header").addClass("header-none");
        setTimeout(function () {
          $(".header").removeClass("header-none");
        }, 2000);
      }
    }
  );*/

  /*$(".main-page > .swiper-container .swiper-slide").on(
    "scrollstart",
    function (e) {
      var screenWidth = $(window).width();
      if (screenWidth < 1200) {
        $(".header").addClass("header-none");
        setTimeout(function () {
          $(".header").removeClass("header-none");
        }, 2000);
      }
    }
  );

  $(".main-page > .swiper-container .swiper-slide")
    .first()
    .on("mousewheel", function (e) {
      var screenWidth = $(window).width();
      if (screenWidth < 1200 && e.originalEvent.deltaY < 0) {
        $(".header").removeClass("header-none");
      }
    });

  $(".main-page > .swiper-container .swiper-slide")
    .last()
    .on("mousewheel", function (e) {
      var screenWidth = $(window).width();
      if (screenWidth < 1200 && e.originalEvent.deltaY > 0) {
        $(".header").removeClass("header-none");
      }
    });*/
});

/*Плавный скролл по якорным ссылкам*/

$(document).ready(function(){
  $(".header__item").on("click","a", function (event) {
    event.preventDefault();
    $(".header__menu").removeClass("active");
    $('.header-mobile').removeClass('active');
    $('body').removeClass('ov-hid');
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

/*Анимация рисования*/

$(document).ready(function () {
  var path1 = document.getElementById('path-1');
  var path2 = document.getElementById('path-2');
  var path3 = document.getElementById('path-3');
  var path4 = document.getElementById('path-4');
  const length1 = path1.getTotalLength();
  const length2 = path2.getTotalLength();
  const length3 = path3.getTotalLength();
  const length4 = path4.getTotalLength();
  path1.style.strokeDasharray = length1;
  path1.style.strokeDashoffset = length1;
  path2.style.strokeDasharray = length2;
  path2.style.strokeDashoffset = length2;
  path3.style.strokeDasharray = length3;
  path3.style.strokeDashoffset = length3;
  path4.style.strokeDasharray = length4;
  path4.style.strokeDashoffset = length4;
});

/*Главный слайдер*/

$(document).ready(function () {
  var swiperMain = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if (screenWidth > 1199 && swiperMain == undefined) {
      swiperMain = new Swiper(".main-page > .swiper-container", {
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        direction: "horizontal",
        speed: 1000,
        grabCursor: false,
        simulateTouch: false,
        mousewheel: {
          eventsTarget: ".main-page",
          releaseOnEdges: true,
        },
        autoHeight: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
      });
    } else if (screenWidth < 1200 && swiperMain != undefined) {
      swiperMain.destroy();
      swiperMain = undefined;
      $(".main > .swiper-container .swiper-wrapper").removeAttr("style");
      $(".main > .swiper-container .swiper-slide").removeAttr("style");
    }
  }

  initSwiper();

  $(window).on("resize", function () {
    initSwiper();
  });

  /*Слайдер проектов*/

  var swiperProjects = new Swiper(".projects .swiper-container", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    effect: 'fade',
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    nested: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".projects .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".projects .swiper-button-next",
      prevEl: ".projects .swiper-button-prev",
    },
  });

  swiperProjects.on('slideChange', function () {
    var slidePreviousIndex = swiperProjects.slides[swiperProjects.previousIndex];
    var slideActiveIndex = swiperProjects.slides[swiperProjects.activeIndex];

    var imageActive = slideActiveIndex.querySelector('.projects__box-img');
    var imagePrev = slidePreviousIndex.querySelector('.projects__box-img');
    var captionActive = slideActiveIndex.querySelector('.projects__box-caption');
    var captionPrev = slidePreviousIndex.querySelector('.projects__box-caption');
    var descriptionActive = slideActiveIndex.querySelector('.projects__box-description');
    var descriptionPrev = slidePreviousIndex.querySelector('.projects__box-description');

    const classesImage = ['animate__animated', 'animate__fadeIn', 'animate__faster',];
    const classesCaption = ['animate__animated', 'animate__fadeInRight', 'animate__fast', 'animate__delay-1s'];
    const classesDescription = ['animate__animated', 'animate__fadeIn', 'animate__fast', 'animate__delay-2s'];

    imageActive.classList.add(...classesImage);
    imagePrev.classList.remove(...classesImage);
    captionActive.classList.add(...classesCaption);
    captionPrev.classList.remove(...classesCaption);
    descriptionActive.classList.add(...classesDescription);
    descriptionPrev.classList.remove(...classesDescription);
  });


  /*Слайдер новостей*/

  var swiperNews = new Swiper(".news .swiper-container", {
    loop: true,
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 16,
    centeredSlides: true,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".news .swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".news .swiper-button-next",
      prevEl: ".news .swiper-button-prev",
    },
    breakpoints: {
      540: {
        slidesPerView: 1.7,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2.4,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 2.8,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    }
  });

  $('.js-popup').click(function() {
    swiperNews.autoplay.stop();
  });

  $('.popup__close').click(function() {
    swiperNews.autoplay.start();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      swiperNews.autoplay.start();
    }
  });

  let x;
  addEventListener('touchstart', e => x = e.changedTouches[0].clientX);
  addEventListener('touchend', e => e.changedTouches[0].clientX - x > 50 && swipeRight());

  function swipeRight() {
    swiperNews.autoplay.start();
  }

  /*Слайдер методы и технологии*/

  var swiperMethods = undefined;
  function initSwiperMethods() {
    if (($('.methods').not('.methods-parallax')) && swiperMethods == undefined) {
      swiperMethods = new Swiper(".methods .swiper-container", {
        loop: false,
        /*oneWayMovement: true,*/
        effect: "cards",
        cardsEffect: {
          rotate: false,
          perSlideOffset: 25,
          perSlideRotate: 0,
        },
        autoHeight: true,
        grabCursor: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow: true,
        nested: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
          768: {
            cardsEffect: {
              perSlideOffset: 40,
            },
          },
          1200: {
            cardsEffect: {
              perSlideOffset: 12,
            },
          },
        }
      });

      /*var slidesList = swiperMethods.slides;

      var slideFirst = slidesList.filter(function (item) {
        return item.classList.contains('card-first');
      });*/
    } else if (($('.methods').hasClass('methods-parallax')) && swiperMethods != undefined) {
      swiperMethods.destroy();
      swiperMethods = undefined;
      $(".methods .swiper-wrapper").removeAttr("style");
      $(".methods .swiper-slide").removeAttr("style");
    }
  }

  $('.methods .swiper-slide').click(function(){
    var cardCaption = $(this).find('.methods__card').attr('data-caption');
    var cardDescription = $(this).find('.methods__card').attr('data-description');
    $(this).addClass('card-first');
    if ($(this).closest('.methods').hasClass('methods-parallax')) {
      $(this).closest('.methods').removeClass('methods-parallax').addClass('methods-animate') ;
    }
    setTimeout(function () {
      $('.methods').removeClass('methods-animate');
      $('.methods__slider-info').addClass('show');
      $('.methods__slider').find('.methods__slider-caption').html(cardCaption);
      $('.methods__slider').find('.methods__slider-description').html(cardDescription);
      initSwiperMethods();

      swiperMethods.on('slideChange', function () {
        var cardCaption = $('.methods__slider .swiper-slide-visible').find('.methods__card').attr('data-caption');
        var cardDescription = $('.methods__slider .swiper-slide-visible').find('.methods__card').attr('data-description');

        $('.methods__slider').find('.methods__slider-caption').html(cardCaption);
        $('.methods__slider').find('.methods__slider-description').html(cardDescription);
      });
    }, 1000);
  });

  document.querySelector('.slide-about')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiperMain.slideTo(0, 2000);
      $('.methods').addClass('methods-parallax');
      $('.methods .swiper-slide').removeClass('card-first');
      $('.methods__slider-info').removeClass('show');
      if (swiperMethods) {
        swiperMethods.destroy();
        swiperMethods = undefined;
        $(".methods .swiper-wrapper").removeAttr("style");
        $(".methods .swiper-slide").removeAttr("style");
      }
    });

  document.querySelector('.slide-projects')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiperMain.slideTo(2, 2000);
      $('.methods').addClass('methods-parallax');
      $('.methods .swiper-slide').removeClass('card-first');
      $('.methods__slider-info').removeClass('show');
      if (swiperMethods) {
        swiperMethods.destroy();
        swiperMethods = undefined;
        $(".methods .swiper-wrapper").removeAttr("style");
        $(".methods .swiper-slide").removeAttr("style");
      }
    });

  document.querySelector('.slide-news')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiperMain.slideTo(3, 2000);
      $('.methods').addClass('methods-parallax');
      $('.methods .swiper-slide').removeClass('card-first');
      $('.methods__slider-info').removeClass('show');
      if (swiperMethods) {
        swiperMethods.destroy();
        swiperMethods = undefined;
        $(".methods .swiper-wrapper").removeAttr("style");
        $(".methods .swiper-slide").removeAttr("style");
      }
    });

  document.querySelector('.slide-contacts')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiperMain.slideTo(4, 2000);
      $('.methods').addClass('methods-parallax');
      $('.methods .swiper-slide').removeClass('card-first');
      $('.methods__slider-info').removeClass('show');
      if (swiperMethods) {
        swiperMethods.destroy();
        swiperMethods = undefined;
        $(".methods .swiper-wrapper").removeAttr("style");
        $(".methods .swiper-slide").removeAttr("style");
      }
    });

  $('body').addClass('slide-1');

  swiperMain.on('slideChange', function () {
    var slider = $(".main-page > .swiper-container")
    var slideNumber = swiperMain.realIndex + 1;

    $(this).removeClass("active");
    $(".header").removeClass("fixed");
    $(".header-mobile").removeClass("active");
    $(".header__menu").removeClass("active");
    $("body").removeClass("ov-hid");

    slider.closest('body').removeAttr("class").addClass('slide-' + slideNumber);

    if($('body').hasClass('slide-1')) {
      $('.methods').addClass('methods-parallax');
      $('.methods .swiper-slide').removeClass('card-first');
      $('.methods__slider-info').removeClass('show');
      if (swiperMethods) {
        swiperMethods.destroy();
        swiperMethods = undefined;
        $(".methods .swiper-wrapper").removeAttr("style");
        $(".methods .swiper-slide").removeAttr("style");
      }
      $('.popup').removeClass('show');
      swiperProjects.autoplay.stop();
      swiperNews.autoplay.stop();
    }

    if($('body').hasClass('slide-2')) {
      $('.popup').removeClass('show');
      swiperProjects.autoplay.stop();
      swiperNews.autoplay.stop();

      $('.intro__wrapper').addClass('animate__animated animate__lightSpeedOutLeft animate__faster');
      $('.methods > .container').addClass('animate__animated animate__fadeInRight animate__slow');
      $('.methods .methods__slider .swiper-container').addClass('animate__animated animate__fadeInRightBig animate__slow');
      $('.methods .methods__slider .methods__card').addClass('animate__animated animate__fadeInRightBig animate__slow');
    } else {
      $('.intro__wrapper').removeClass('animate__animated animate__lightSpeedOutLeft animate__faster');
      $('.methods > .container').removeClass('animate__animated animate__fadeInRight animate__slow');
      $('.methods .methods__slider .swiper-container').removeClass('animate__animated animate__fadeInRightBig animate__slow');
      $('.methods .methods__slider .methods__card').removeClass('animate__animated animate__fadeInRightBig animate__slow');
    }

    if($('body').hasClass('slide-3')) {
      $('.methods').addClass('methods-parallax');
      $('.methods .swiper-slide').removeClass('card-first');
      $('.methods__slider-info').removeClass('show');
      if (swiperMethods) {
        swiperMethods.destroy();
        swiperMethods = undefined;
        $(".methods .swiper-wrapper").removeAttr("style");
        $(".methods .swiper-slide").removeAttr("style");
      }
      $('.popup').removeClass('show');
      swiperProjects.autoplay.start();
      swiperNews.autoplay.stop();

      $('.projects').addClass('animate__animated animate__fadeIn animate__slower');
      $('.projects .projects__line').addClass('animate__animated animate__fadeIn animate__fast animate__delay-1s');
      $('.projects .projects__box-info').addClass('animate__animated animate__fadeInRight animate__fast animate__delay-1s');
    } else {
      $('.projects').removeClass('animate__animated animate__fadeIn animate__slower');
      $('.projects .projects__line').removeClass('animate__animated animate__fadeIn animate__fast animate__delay-1s');
      $('.projects .projects__box-info').removeClass('animate__animated animate__fadeInRight animate__fast animate__delay-1s');
    }

    if($('body').hasClass('slide-4')) {
      $('.methods').addClass('methods-parallax');
      $('.methods .swiper-slide').removeClass('card-first');
      $('.methods__slider-info').removeClass('show');
      if (swiperMethods) {
        swiperMethods.destroy();
        swiperMethods = undefined;
        $(".methods .swiper-wrapper").removeAttr("style");
        $(".methods .swiper-slide").removeAttr("style");
      }
      $('.popup').removeClass('show');
      swiperProjects.autoplay.stop();
      swiperNews.autoplay.start();

      $('.news .container').addClass('animate__animated animate__fadeInRight animate__slow');
      $('.news .swiper-container').addClass('animate__animated animate__fadeInRight animate__slow');
    } else {
      $('.news .container').removeClass('animate__animated animate__fadeInRight animate__slow');
      $('.news .swiper-container').removeClass('animate__animated animate__fadeInRight animate__slow');
    }

    if($('body').hasClass('slide-5')) {
      $('.methods').addClass('methods-parallax');
      $('.methods .swiper-slide').removeClass('card-first');
      $('.methods__slider-info').removeClass('show');
      if (swiperMethods) {
        swiperMethods.destroy();
        swiperMethods = undefined;
        $(".methods .swiper-wrapper").removeAttr("style");
        $(".methods .swiper-slide").removeAttr("style");
      }
      $('.popup').removeClass('show');
      swiperProjects.autoplay.stop();
      swiperNews.autoplay.stop();

      $('.bg-icon-1 svg').addClass('animate__animated animate__fadeInLeft animate__slower animate__delay-2s');
      $('.bg-icon-2 svg').addClass('animate__animated animate__fadeInDown animate__slower animate__delay-2s');
      $('.bg-icon-3 svg').addClass('animate__animated animate__fadeInBottomRight animate__slower animate__delay-4s');
      $('.bg-icon-4 svg').addClass('animate__animated animate__fadeInRight animate__slower animate__delay-1s');
    } else {
      $('.bg-icon-1 svg').removeClass('animate__animated animate__fadeInLeft animate__slower animate__delay-2s');
      $('.bg-icon-2 svg').removeClass('animate__animated animate__fadeInDown animate__slower animate__delay-2s');
      $('.bg-icon-3 svg').removeClass('animate__animated animate__fadeInBottomRight animate__slower animate__delay-4s');
      $('.bg-icon-4 svg').removeClass('animate__animated animate__fadeInRight animate__slower animate__delay-1s');
    }
  });

});

/*Модальные окна*/

$(document).ready(function() {
  $('.js-popup').click(function(e){
    e.preventDefault();
    $('.popup').removeClass('show');
    var id = $(this).attr('href');
    $(id).addClass('show');

    var image = $(this).closest('.news__box').find('.news__box-img img').attr('src');
    var caption = $(this).closest('.news__box').find('.news__box-caption').html();
    var description = $(this).closest('.news__box').find('.news__box-description').html();

    if (image) {
      $('.popup').find('.news__box-img').removeClass('img-none');
      $('.popup').find('.news__box-img img').attr('src', image);
    } else {
      $('.popup').find('.news__box-img').addClass('img-none');
      $('.popup').find('.news__box-img img').attr('src', '');
    }
    $('.popup').find('.news__box-caption').html(caption);
    $('.popup').find('.news__box-description').html(description);

  });

  $('.popup__close').click(function(){
    $(this).closest('.popup').removeClass('show');
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $('.popup').removeClass('show');
    }
  });

  $(document).mouseup(function (e){
    var el1 = $(".popup");
    var el2 = $(".news .swiper-wrapper");
    var el3 = $(".news .news__navigation");
    var el4 = $(".news .swiper-pagination");
    if ((!el1.is(e.target) && el1.has(e.target).length === 0) && (!el2.is(e.target) && el2.has(e.target).length === 0) && (!el3.is(e.target) && el3.has(e.target).length === 0) && (!el4.is(e.target) && el4.has(e.target).length === 0)) {
      $('.popup').removeClass('show');
    }
  });

  let x;
  addEventListener('touchstart', e => x = e.changedTouches[0].clientX);
  addEventListener('touchend', e => e.changedTouches[0].clientX - x > 50 && swipeRight());

  function swipeRight() {
    $('.popup').removeClass('show');
  }
});

/*$(document).ready(function() {
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', '${window.innerHeight}px')
  }
  window.addEventListener('resize', appHeight)
  appHeight()
});*/

/*Parallax*/

$(document).ready(function() {

  var screenWidth = $(window).width();

  if (screenWidth > 1199) {
    var rect = $('.methods')[0].getBoundingClientRect();
    var mouse = {x: 0, y: 0, moved: false};

    $(".methods").mousemove(function(e) {
      mouse.moved = true;
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    $('.methods .swiper-slide').click(function(){
      mouse.moved = false;
      parallaxIt(".methods:not(.methods-parallax) .swiper-slide.card-1 svg", 0);
      parallaxIt(".methods:not(.methods-parallax) .swiper-slide.card-2 svg", 0);
      parallaxIt(".methods:not(.methods-parallax) .swiper-slide.card-3 svg", 0);
    });

    TweenLite.ticker.addEventListener('tick', function(){
      if (mouse.moved){
        parallaxIt(".methods:not(.methods-parallax) .swiper-slide.card-1 svg", 0);
        parallaxIt(".methods:not(.methods-parallax) .swiper-slide.card-2 svg", 0);
        parallaxIt(".methods:not(.methods-parallax) .swiper-slide.card-3 svg", 0);

        parallaxIt(".methods.methods-parallax .swiper-slide.card-1 svg", 40);
        parallaxIt(".methods.methods-parallax .swiper-slide.card-2 svg", -40);
        parallaxIt(".methods.methods-parallax .swiper-slide.card-3 svg", -60);
      }
      mouse.moved = false;
    });

    function parallaxIt(target, movement) {
      TweenMax.to(target, 0.3, {
        x: (mouse.x - rect.width / 2) / rect.width * movement,
        y: (mouse.y - rect.height / 2) / rect.height * movement
      });
    }

    $(window).on('resize scroll', function(){
      rect = $('.methods')[0].getBoundingClientRect();
    })
  }

});
