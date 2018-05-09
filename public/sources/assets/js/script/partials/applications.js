$(document).on('click', '.changeapplication', function(e) {
  e.preventDefault();
  e.stopPropagation();

  $('.changeapplication').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));

});