$(document).on('click', '.changeprofil', function(e) {
  e.preventDefault();
  e.stopPropagation();

  $('.changeprofil').removeClass('active show');
  $(this).addClass('active show');
  $('#mainContent').empty().load($(this).attr('href'));

});