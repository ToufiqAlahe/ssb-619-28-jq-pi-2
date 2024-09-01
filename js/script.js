
// ======jq=====

$(document).ready(function(){

  // ex1
  $('.wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplayspeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ex2
  $(window).load(function () {
    $("#loading").fadeOut(400);
  });

  // ex3
   $("#mobile-number").intlTelInput();

  // ex4
  $('.owl-carousel').owlCarousel();


});




// JS

// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';

// // import Swiper and modules styles
// import 'swiper/swiper.min.css';
// import 'swiper/modules/navigation.min.css';

// const swiper = new Swiper('.swiper', {
//   modules: [Navigation],
//   ....,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// // OR (Alternative)

// const swiper = new Swiper('.swiper', {
//   modules: [Navigation],
//   ....,
// });
// swiper.nextEl = '.swiper-button-next';
// swiper.prevEl = '.swiper-button-prev';
