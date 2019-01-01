$(document).on('click', '.changeinformation', function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log($(this).text());
  $('#header-title').empty().append($(this).text());
  $('.changeinformation').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));

});