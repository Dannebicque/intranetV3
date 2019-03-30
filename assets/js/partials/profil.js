$(document).on('click', '.changeprofil', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $('.changeprofil').removeClass('active show');
  $(this).addClass('active show');
  $('#profilContent').empty().load($(this).attr('href'));
});

$(document).on('change', '.addfavori', function (e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax({
    url: Routing.generate('user_add_favori'),
    method: 'POST',
    data: {
      'user': $(this).val(),
      'etat': $(this).prop('checked')
    }
  })
});