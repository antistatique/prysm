'user strict';

(function(){
  var text_max = 250;
  $('#textarea-help').html(text_max);

  $('#fieldihhlst').keyup(function() {
    var text_length = $('#fieldihhlst').val().length;
    var text_remaining = text_max - text_length;

    $('#textarea-help').html(text_remaining);
  });

  // FOCUS ME. -Footer image
  $('.focuspoint').focusPoint();

  // STICK ME. -Navbar content
  $("#sidebar-nav").stick_in_parent({
    parent: '#container-wrapper'
  });

  var svgTriggered = false;
  $('body').on('activate.bs.scrollspy', function (item) {
    if ($(window).width() > 767 ) {
      if ($(item.target).hasClass('svg-trigger') && !svgTriggered) {
        svgTriggered = true;
        $('.svg-container').addClass('get-together');
      } else if (!$(item.target).hasClass('svg-trigger') && svgTriggered) {
        svgTriggered = false;
        $('.svg-container').removeClass('get-together');
      }
    } else {
      $('.svg-container').addClass('get-together');
    }
  });

  // scroll events
  var header_height = $('header.header').height() * 2 / 3;
  $(window).scroll(function () {
    if ($(window).width() > 991 ) {
      var scroll_position = $(window).scrollTop() - 150;
      var diff = header_height - scroll_position;
      var opacity = scroll_position / header_height > 1 ? 1 : scroll_position / header_height;
      $('#navbar-main').css('opacity', (1 - opacity));
      $('#sidebar-nav').css('opacity', opacity);
    }
  });

  // menu scrollto
  $('.navbar-list').on('click', 'a', function(e) {
    if (!$(this).hasClass('real-link')) {
      e.preventDefault();
      var target = $(this).attr('href');
      $(window).scrollTo(target, '400ms');
    }
  });

  $('#scroll-contact').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $(window).scrollTo(target, '400ms');
    console.log('hello');
  });

}());
