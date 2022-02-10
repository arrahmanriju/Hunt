$(function () {
  // banner slider
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right nxt" aria-hidden="true"></i>'
  });

  // portfolio images with 
  $('.venobox').venobox();


  // service slider
  $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-up up" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-down down" aria-hidden="true"></i>',
    centerMode: true,
    centerPadding: 0,
  });


  // Feedback Slider

  $('.feed-img-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feed-text-slider',
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-up up" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-down down" aria-hidden="true"></i>',
    centerMode: true,
    centerPadding: 0,
  });
  $('.feed-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.feed-img-slider',
    fade: true,
    arrows: false,
  });


  // // counter part start
  // $('.counter').counterUp({
  //   delay: 50,
  //   time: 5000,
  // });

  //sponsor-slider
  $('.sponsor-main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
  })






});