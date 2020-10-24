$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
          },
        loop:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination'
        },
        mousewheel: true,
        keyboard: true,
    });

    $('.top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 1000);
    });
    
    $('.dropdown').click(function(event) {
      /* Act on the event */
      event.preventDefault();
      $(this).find('.dropdown-item').toggleClass('dropdown-open');
    });
  });