$(function() {
    $('.header__lang-link').on('click', function(event) {
        event.preventDefault();
        $('.header__lang-link').toggleClass('header__lang-link--active');
    })
  
})