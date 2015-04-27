'user strict';

(function(){
  var text_max = 250;
  var string = ' caractères restants.';
  $('#textarea-help').html(text_max + string);

  $('#fieldihhlst').keyup(function() {
    var text_length = $('#fieldihhlst').val().length;
    var text_remaining = text_max - text_length;

    $('#textarea-help').html(text_remaining + string);
  });

  // FOCUS ME. -Footer image
  $('.focuspoint').focusPoint();

  // STICK ME. -Navbar content
  $("#sidebar-nav").stick_in_parent({
    parent: '#container-wrapper'
  });

  var svgTriggered = false;
  $('body').on('activate.bs.scrollspy', function (item) {
    if ($(item.target).hasClass('svg-trigger') && !svgTriggered) {
      svgTriggered = true;
      $('.svg-container').addClass('get-together');
      // $('#first').css('transform', 'translate(0,0)');
      // $('#third').css('transform', 'translate(0,0)');
    } else if (!$(item.target).hasClass('svg-trigger') && svgTriggered) {
      svgTriggered = false;
      $('.svg-container').removeClass('get-together');
      // $('#first').css('transform', 'translate(0,150px)');
      // $('#third').css('transform', 'translate(0,-150px)');
    }
  });

}());
