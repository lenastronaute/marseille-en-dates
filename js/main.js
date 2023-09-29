function main() {
  'use strict';

  $('a.page-scroll').click(function () {
    var targetId = $(this).attr('href');
    var targetOffset = $(targetId).offset().top - 40;

    $('html, body').animate({
      scrollTop: targetOffset
    }, 900);

    return false;
  });

  $(window).scroll(function () {
    var navHeight = $(window).height() - 500;
    if ($(this).scrollTop() > navHeight) {
      $('.navbar-default').addClass('on');
    } else {
      $('.navbar-default').removeClass('on');
    }
  });

  $('body').scrollspy({
    target: '.navbar-default',
    offset: 80
  });

  $(".navbar-nav li a").click(function (event) {
    if ($(".navbar-toggle").is(":visible")) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  $(window).on('load', function () {
    var $container = $('.image-grid');
    $container.isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('.cat a').click(function () {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector
      });
      return false;
    });

  });

  $('.portfolio-item a').nivoLightbox({
    effect: 'slideDown',
    keyboardNav: true
  });
}

$(document).ready(function () {
  main();
});
