$(function() {
    $('.header__lang-link').on('click', function() {
        $('.header__lang-link').toggleClass('header__lang-link--active');
    })

    $('.device__price-btn').on('click', function(event) {
        event.preventDefault();
        $('.popup__order').addClass('order__open');
    })

    $('.popup__btn').on('click', function(event) {
        event.preventDefault();
        $('.popup__order').removeClass('order__open');
        $('.popup__feedback').addClass('open__feedback');
    })

    $('.popup__close').on('click', function(event) {
        event.preventDefault();
        $('.popup__order').removeClass('order__open');
        $('.popup__feedback').removeClass('open__feedback');
    })
  
})